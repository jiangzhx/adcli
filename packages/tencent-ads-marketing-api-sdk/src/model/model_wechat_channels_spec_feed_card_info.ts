// Generated from tencentad/marketing-api-go-sdk pkg/model/model_wechat_channels_spec_feed_card_info.go
// Do not edit manually.

import type { WechatChannelsSpecFeedCardInfoContestInfo, WechatChannelsSpecFreeTradeAdInfo } from "../model/index";

export interface WechatChannelsSpecFeedCardInfo {
  icon_url?: string;
  desc?: string;
  card_type?: number;
  dest_url?: string;
  free_trade_ad_info?: WechatChannelsSpecFreeTradeAdInfo;
  contest_info?: WechatChannelsSpecFeedCardInfoContestInfo;
}

