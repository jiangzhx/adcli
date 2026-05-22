// Generated from tencentad/marketing-api-go-sdk pkg/model/model_wechat_channels_spec_free_trade_ad_info.go
// Do not edit manually.

import type { WechatChannelsSpecFreeTradeAdInfoButtonInfo, WechatChannelsSpecFreeTradeAdInfoImageInfo } from "../model/index";

export interface WechatChannelsSpecFreeTradeAdInfo {
  thumb?: WechatChannelsSpecFreeTradeAdInfoImageInfo;
  image_list?: WechatChannelsSpecFreeTradeAdInfoImageInfo[];
  title?: string;
  desc?: string;
  back_color_rgb?: string;
  button_list?: WechatChannelsSpecFreeTradeAdInfoButtonInfo[];
  dynamic_show_type?: number;
  dynamic_show_text?: string;
}

