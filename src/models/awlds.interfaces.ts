export interface IIconConfig {
  iconColor?: string;
  iconName: string;
  iconPlacement?: string;
  iconType: string;
}

export interface IItemModel {
  data?: string;
  disabled?: boolean;
  icon?: IIconConfig;
  justification?: string;
  lozengeContent?: string;
  name: string;
  subText?: string;
  selected?: boolean;
  uuid?: string;
}





export interface IAlertConfig {
    closeUuid?: string;
    inContainer?: boolean;
    isDismissable?: boolean;
    type: string;
  }
  export interface IAvatarConfig {
    image?: {
      url: string;
      altText: string;
    };
    innerText?: string;
  }
  export interface IArticleCardConfig {
    avatar?: IAvatarConfig;
    callToAction?: {
      text: string;
      url: string;
    };
    glow?: {
      colorPosition: string;
      size?: string;
    };
    headerText?: string;
    icon?: IIconConfig;
  }

  export interface IChecboxConfig {
    callback?: Function;
    checked?: boolean;
    disabled?: boolean;
    errorMessage?: string;
    hasError?: boolean;
    labelText: string;
    uuid?: string;
    value: string;
  }
  export interface INavigationItemModel extends IItemModel {
    url?: string;
  }
  export interface IOverflowConfig {
    overflowIcon?: IIconConfig;
    overflowItems?: Array<INavigationItemModel>;
    overflowText?: string;
    isInHeader?: boolean;
  }
  export interface IHeaderConfig {
    isExternal?: boolean;
    navigationItems?: Array<INavigationItemModel>;
    overflow?: IOverflowConfig;
    pageTitle?: string;
  }
  export interface IInfoCardConfig extends IArticleCardConfig {
    subHeaderText?: string;
  }

  export interface IModalHeaderConfig {
    closeIsVisible?: boolean;
    closeText?: string;
    closeUuid?: string;
    headerText?: string;
    tagContent?: string;
    tagIconName?: string;
  }
  // export interface IModalConfig {
  //   blockScrolling?: boolean;
  //   buttons?: Array<IButtonConfig>;
  //   dismissByMask?: boolean;
  //   escToClose?: boolean;
  //   modalHeader?: IModalHeaderConfig;
  //   position?: string;
  //   size?: string;
  //   type?: string;
  // }
  export interface IRadioConfig extends IChecboxConfig {
  }
  export interface IResultsCardConfig {
    headerText: string;
    date?: Date;
    subheaderText?: string;
    callToAction?: {
      text: string;
      url: string;
    };
  }
  export interface IStepItemModel {
    complete?: boolean;
    current?: boolean;
    description?: string;
    disabled?: boolean;
    icon?: IIconConfig;
    invalid?: boolean;
    labelText: string;
    stepNum: string;
    uuid?: string;
  }

  export interface IToggleConfig {
    disabled?: boolean;
    isOn?: boolean;
    labelText: string;
    uuid?: string;
  }
  