// Generated from tencentad/marketing-api-go-sdk pkg/model/model_rewardquest_wechat_channels_spec_free_trade_ad_info.go
// Do not edit manually.

import type { ConversionDataType, ConversionTargetType, LinkUrlLinkNameType, RewardquestWechatChannelsSpecImageInfo } from "../model/index";

export interface RewardquestWechatChannelsSpecFreeTradeAdInfo {
  thumb?: RewardquestWechatChannelsSpecImageInfo;
  image_list?: RewardquestWechatChannelsSpecImageInfo[];
  title?: string;
  desc?: string;
  back_color_rgb?: string;
  dynamic_show_type?: ConversionDataType;
  dynamic_show_text?: ConversionTargetType;
  btn_text?: LinkUrlLinkNameType;
}

