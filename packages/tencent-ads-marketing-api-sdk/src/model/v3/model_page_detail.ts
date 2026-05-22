// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_page_detail.go
// Do not edit manually.

import type { AndroidAppDetail, ChannelsReserveLiveDetail, ChannelsShopProductDetail, ChannelsWatchLiveDetail, H5Detail, H5ProfilePageDetail, IosAppDetail, QqMiniGamePageDetail, QqMiniProgramPageDetail, WechatChannelsFeedPageDetail, WechatMiniGamePageDetail, WechatMiniProgramPageDetail, WechatOfficialAccountDetailDetail, WecomConsultPageDetail, XjPageDetail } from "../v3/index";

export interface PageDetail {
  official_detail?: XjPageDetail;
  wechat_mini_program_page_detail?: WechatMiniProgramPageDetail;
  wechat_mini_game_page_detail?: WechatMiniGamePageDetail;
  h5_detail?: H5Detail;
  android_app_detail?: AndroidAppDetail;
  ios_app_detail?: IosAppDetail;
  qq_mini_program_page_detail?: QqMiniProgramPageDetail;
  qq_mini_game_page_detail?: QqMiniGamePageDetail;
  wechat_official_account_detail_detail?: WechatOfficialAccountDetailDetail;
  channels_shop_product_detail?: ChannelsShopProductDetail;
  channels_reserve_live_detail?: ChannelsReserveLiveDetail;
  channels_watch_live_detail?: ChannelsWatchLiveDetail;
  wecom_consult_page_detail?: WecomConsultPageDetail;
  wechat_channels_feed_page_detail?: WechatChannelsFeedPageDetail;
  h5_profile_page_detail?: H5ProfilePageDetail;
}

