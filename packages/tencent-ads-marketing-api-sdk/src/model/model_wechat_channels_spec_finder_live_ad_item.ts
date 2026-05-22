// Generated from tencentad/marketing-api-go-sdk pkg/model/model_wechat_channels_spec_finder_live_ad_item.go
// Do not edit manually.

import type { WechatChannelsSpecCheerIconInfo, WechatChannelsSpecConvComponent } from "../model/index";

export interface WechatChannelsSpecFinderLiveAdItem {
  is_use_component?: number;
  is_use_cheer_icon?: number;
  is_use_bg_img?: number;
  conv_component?: WechatChannelsSpecConvComponent;
  cheer_icon_info?: WechatChannelsSpecCheerIconInfo[];
  bg_img_url?: string;
  begin_time?: number;
}

