// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { AdcreativeCreativeElementsMp, AndroidQuickAppSpec, AppGiftPackCode, BarrageListCreateStruct, ConversionDataType, ConversionTargetType, DestinationType, DynamicAdcreativeSpec, FloatingZone, HeadClickSpec, HeadClickType, LinkPageSpec, LinkPageType, LinkUrlLinkNameType, LiveVideoMode, LiveVideoSubMode, PageSpec, PromotedObjectType, ShareContentSpec, SimpleCanvasSubType, UnionMarketSpec, VideoEndPageSpec, WechatChannelsTrackingSpec } from "../models";

export interface AdcreativesAddRequest {
  campaign_id?: number | string;
  adcreative_name?: string;
  promoted_object_type?: PromotedObjectType;
  page_type?: DestinationType;
  automatic_site_enabled?: boolean;
  site_set?: string[];
  page_spec?: PageSpec;
  link_page_type?: LinkPageType;
  link_name_type?: LinkUrlLinkNameType;
  link_page_spec?: LinkPageSpec;
  conversion_data_type?: ConversionDataType;
  conversion_target_type?: ConversionTargetType;
  qq_mini_game_tracking_query_string?: string;
  deep_link_url?: string;
  android_deep_link_app_id?: string;
  ios_deep_link_app_id?: string;
  universal_link_url?: string;
  promoted_object_id?: string;
  profile_id?: number | string;
  share_content_spec?: ShareContentSpec;
  dynamic_adcreative_spec?: DynamicAdcreativeSpec;
  component_id?: number | string;
  union_market_switch?: boolean;
  playable_page_material_id?: string;
  video_end_page?: VideoEndPageSpec;
  feeds_video_comment_switch?: boolean;
  webview_url?: string;
  simple_canvas_sub_type?: SimpleCanvasSubType;
  floating_zone?: FloatingZone;
  marketing_pendant_image_id?: string;
  countdown_switch?: boolean;
  head_click_type?: HeadClickType;
  head_click_spec?: HeadClickSpec;
  page_track_url?: string;
  barrage_list?: BarrageListCreateStruct[];
  app_gift_pack_code?: AppGiftPackCode;
  enable_breakthrough_siteset?: boolean;
  industry_label?: string;
  union_market_spec?: UnionMarketSpec;
  android_quick_app_spec?: AndroidQuickAppSpec;
  wechat_channels_tracking_spec?: WechatChannelsTrackingSpec;
  live_video_mode?: LiveVideoMode;
  live_video_sub_mode?: LiveVideoSubMode;
  link_name_text?: string;
  account_id?: number | string;
  adcreative_template_id?: number | string;
  adcreative_elements?: AdcreativeCreativeElementsMp;
}

