// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { WechatChannelsSpecFreeTradeAdInfoButtonInfo, WechatChannelsSpecFreeTradeAdInfoImageInfo } from "../models";

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

