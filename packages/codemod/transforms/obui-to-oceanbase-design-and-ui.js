const importComponent = require('./utils/import-component');

module.exports = (file, api, options) => {
  return importComponent(file, api, {
    ...options,
    fromPkgNames: '@alipay/ob-ui',
    // order: @oceanbase/ui -> @oceanbase/design
    toPkgList: [
      {
        name: '@oceanbase/ui',
        components: [
          'Action',
          'BackgroundTaskManager',
          'BackgroundTaskManagerConstants',
          'BasicLayout',
          'BatchOperationBar',
          'Boundary',
          'ContentWithQuestion',
          'Dialog',
          'DocDialog',
          'FullscreenBox',
          'Highlight',
          'GraphToolbar',
          'IconFont',
          'Login',
          'Lottie',
          'NavMenu',
          'Password',
          'Ranger',
          'SideTip',
          'TaskGraph',
          'TreeSearch',
          'Welcome',
          /* pro-components */
          'PageContainer',
          'ProLayout',
          'ProCard',
          'WaterMark',
          'StatisticCard',
          'CheckCard',
          'ProFormText',
          'ProFormDigit',
          'ProFormTextArea',
          'ProFormCaptcha',
          'ProFormDatePicker',
          'ProFormDateTimePicker',
          'ProFormDateRangePicker',
          'ProFormDateTimeRangePicker',
          'ProFormSelect',
          'ProFormTreeSelect',
          'ProFormCheckbox',
          'ProFormRadio',
          'ProFormSlider',
          'ProFormSwitch',
          'ProFormUploadButton',
          'ProFormUploadDragger',
          'ProFormMoney',
          'ProFormSegmented',
          'ProFormList',
          'BetaSchemaForm',
          'QueryFilter',
          'LightFilter',
          'StepsForm',
          'ModalForm',
          'DrawerForm',
          'LoginForm',
          'LoginFormPage',
          'ProTable',
          'EditableProTable',
          'DragSortTable',
          'ProList',
          'ProDescriptions',
          'ProSkeleton',
          'ProField',
        ],
        types: [
          'ActionProps',
          // BackgroundTaskManager
          'BackgroundTaskManagerProps',
          'BackgroundTaskManagerRef',
          'ITaskMgrPreset',
          'ITaskMgrQueue',
          'TaskMgrID',
          'BasicLayoutProps',
          'BatchOperationBarProps',
          'BoundaryProps',
          'ContentWithQuestionProps',
          'DialogProps',
          'DocDialogProps',
          'FullscreenBoxProps',
          'GraphToolbarProps',
          'HighlightProps',
          'IconFontProps',
          'LoginProps',
          'LottieProps',
          'NavMenuProps',
          'PasswordProps',
          // Ranger
          'RangerProps',
          'QuickPickerProps',
          'SideTipProps',
          'TaskGraphProps',
          // TreeSearch
          'TreeSearchProps',
          'TreeSearchRef',
          'Node',
          'WelcomeProps',
          /* pro-components */
          'PageContainerProps',
          'ProLayoutProps',
          'ProCardProps',
          'WaterMarkProps',
          'StatisticCardProps',
          'CheckCardProps',
          'ProFormTextProps',
          'ProFormDigitProps',
          'ProFormTextAreaProps',
          'ProFormCaptchaProps',
          'ProFormDatePickerProps',
          'ProFormDateTimePickerProps',
          'ProFormDateRangePickerProps',
          'ProFormDateTimeRangePickerProps',
          'ProFormSelectProps',
          'ProFormTreeSelectProps',
          'ProFormCheckboxProps',
          'ProFormRadioProps',
          'ProFormSliderProps',
          'ProFormSwitchProps',
          'ProFormUploadButtonProps',
          'ProFormUploadDraggerProps',
          'ProFormMoneyProps',
          'ProFormSegmentedProps',
          'ProFormListProps',
          'BetaSchemaFormProps',
          'QueryFilterProps',
          'LightFilterProps',
          'StepsFormProps',
          'ModalFormProps',
          'DrawerFormProps',
          'LoginFormProps',
          'LoginFormPageProps',
          'ProTableProps',
          'EditableProTableProps',
          'DragSortTableProps',
          'ProListProps',
          'ProDescriptionsProps',
          'ProSkeletonProps',
          'ProFieldProps',
        ],
        paths: ['/locale/', '/locale/'],
      },
      {
        name: '@oceanbase/design',
      },
    ],
  });
};
