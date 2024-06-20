import {
  createCache,
  legacyNotSelectorLinter,
  logicalPropertiesLinter,
  parentSelectorLinter,
  StyleProvider,
} from '@ant-design/cssinjs';
import { App, theme as obTheme } from '@oceanbase/design';
import type { DirectionType } from '@oceanbase/design/es/config-provider';
import { usePrefersColor, createSearchParams, useOutlet, useSearchParams } from 'dumi';
import { IColorValue } from 'dumi/dist/client/theme-api/usePrefersColor';
import React, { useCallback, useEffect, useMemo } from 'react';
import { Analytics } from '@vercel/analytics/react';
import useLayoutState from '../../hooks/useLayoutState';
import SiteThemeProvider from '../SiteThemeProvider';
import useLocation from '../../hooks/useLocation';
import type { ThemeName } from '../common/ThemeSwitch';
import ThemeSwitch from '../common/ThemeSwitch';
import type { SiteContextProps } from '../slots/SiteContext';
import SiteContext from '../slots/SiteContext';

type Entries<T> = { [K in keyof T]: [K, T[K]] }[keyof T][];
type SiteState = Partial<Omit<SiteContextProps, 'updateSiteContext'>>;

const RESPONSIVE_MOBILE = 768;

const styleCache = createCache();
if (typeof global !== 'undefined') {
  (global as any).styleCache = styleCache;
}

const getAlgorithm = (themes: ThemeName[] = []) =>
  themes.map(theme => {
    if (theme === 'dark') {
      return obTheme.darkAlgorithm;
    }
    if (theme === 'compact') {
      return obTheme.compactAlgorithm;
    }
    return obTheme.defaultAlgorithm;
  });

const GlobalLayout: React.FC = () => {
  const outlet = useOutlet();
  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [, , setPrefersColor] = usePrefersColor();
  const [{ theme = [], direction, isMobile }, setSiteState] = useLayoutState<SiteState>({
    isMobile: false,
    direction: 'ltr',
    theme: ['light', 'motion-off'],
  });

  const updateSiteConfig = useCallback(
    (props: SiteState) => {
      setSiteState(prev => ({ ...prev, ...props }));

      // updating `searchParams` will clear the hash
      const oldSearchStr = searchParams.toString();

      let nextSearchParams: URLSearchParams = searchParams;
      (Object.entries(props) as Entries<SiteContextProps>).forEach(([key, value]) => {
        if (key === 'direction') {
          if (value === 'rtl') {
            nextSearchParams.set('direction', 'rtl');
          } else {
            nextSearchParams.delete('direction');
          }
        }
        if (key === 'theme') {
          nextSearchParams = createSearchParams({
            ...nextSearchParams,
            theme: value.filter(t => t !== 'light'),
          } as URLSearchParams & any);
          // Set theme of dumi site
          setPrefersColor(value?.filter(t => t === 'dark' || t === 'light')?.[0] as IColorValue);
        }
      });

      if (nextSearchParams.toString() !== oldSearchStr) {
        setSearchParams(nextSearchParams);
      }
    },
    [searchParams, setSearchParams]
  );

  const updateMobileMode = () => {
    updateSiteConfig({ isMobile: window.innerWidth < RESPONSIVE_MOBILE });
  };

  useEffect(() => {
    const _theme = searchParams.getAll('theme') as ThemeName[];
    const _direction = searchParams.get('direction') as DirectionType;

    setSiteState({ theme: _theme, direction: _direction === 'rtl' ? 'rtl' : 'ltr' });
    // Set theme of dumi site
    setPrefersColor(_theme?.filter(t => t === 'dark' || t === 'light')?.[0] as IColorValue);
    // Handle isMobile
    updateMobileMode();

    window.addEventListener('resize', updateMobileMode);
    return () => {
      window.removeEventListener('resize', updateMobileMode);
    };
  }, []);

  const siteContextValue = useMemo(
    () => ({
      direction,
      updateSiteConfig,
      theme: theme!,
      isMobile: isMobile!,
    }),
    [isMobile, direction, updateSiteConfig, theme]
  );

  return (
    <StyleProvider
      cache={styleCache}
      linters={[logicalPropertiesLinter, legacyNotSelectorLinter, parentSelectorLinter]}
    >
      <SiteContext.Provider value={siteContextValue}>
        <SiteThemeProvider
          theme={{
            algorithm: getAlgorithm(theme),
            isDark: theme.includes('dark'),
            isAliyun: theme.includes('aliyun'),
            customFont: theme.includes('custom-font'),
            token: {
              motion: !theme.includes('motion-off'),
            },
          }}
        >
          <App>
            {outlet}
            {!pathname.startsWith('/~demos') && (
              <ThemeSwitch
                value={theme}
                onChange={nextTheme => updateSiteConfig({ theme: nextTheme })}
              />
            )}
            <Analytics />
          </App>
        </SiteThemeProvider>
      </SiteContext.Provider>
    </StyleProvider>
  );
};

export default GlobalLayout;
