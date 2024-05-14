import type { Locale as AntLocale } from 'antd/es/locale';
import type { PaginationLocale as AntPaginationLocale } from 'antd/es/pagination/Pagination';
import type { DrawerLocale } from '../drawer';
import type { InputLocale } from '../input';
import type { InputNumberLocale } from '../input-number';
import type { SelectLocale } from '../select';
import type { TreeSelectLocale } from '../tree-select';
import type { TableLocale } from '../table';

export * from 'antd/es/locale';

export type GlobalLocale = AntLocale['global'] & {
  inputPlaceholder?: string;
};

export interface PaginationLocale extends AntPaginationLocale {
  total?: string;
}

export interface Locale extends AntLocale {
  global?: GlobalLocale;
  Pagination?: PaginationLocale;
  Drawer?: DrawerLocale;
  Input?: InputLocale;
  InputNumber?: InputNumberLocale;
  Select?: SelectLocale;
  TreeSelect?: TreeSelectLocale;
  Table?: TableLocale;
}

export { default as useLocale } from './useLocale';
