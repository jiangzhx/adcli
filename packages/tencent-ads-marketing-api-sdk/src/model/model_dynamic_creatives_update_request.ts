// Generated from tencentad/marketing-api-go-sdk pkg/model/model_dynamic_creatives_update_request.go
// Do not edit manually.

import type { AdvertiserPicMaterialSwitch, AdvertiserSublinkSwitch, AppGiftPackCode, BarrageListCreateStruct, ConversionDataType, ConversionTargetType, DestinationType, DynamicCreativeElements, DynamicCreativePageSpec, DynamicLandingPageInfo, FloatingZone, HeadClickSpec, HeadClickType, LinkPageSpec, LinkPageType, LinkUrlLinkNameType, RevisedAdcreativeSpec, ShareContentSpec, SimpleCanvasSubType, UnionMarketSpec, VideoEndPageSpec } from "../model/index";

export interface DynamicCreativesUpdateRequest {
  dynamic_creative_id?: number | string;
  dynamic_creative_template_id?: number | string;
  dynamic_creative_elements?: DynamicCreativeElements;
  deep_link_url?: string;
  impression_tracking_url?: string;
  click_tracking_url?: string;
  feeds_video_comment_switch?: boolean;
  union_market_switch?: boolean;
  page_type?: DestinationType;
  page_spec?: DynamicCreativePageSpec;
  link_page_type?: LinkPageType;
  link_name_type?: LinkUrlLinkNameType;
  link_page_spec?: LinkPageSpec;
  conversion_data_type?: ConversionDataType;
  conversion_target_type?: ConversionTargetType;
  qq_mini_game_tracking_query_string?: string;
  android_deep_link_app_id?: string;
  ios_deep_link_app_id?: string;
  universal_link_url?: string;
  share_content_spec?: ShareContentSpec;
  profile_id?: number | string;
  component_id?: number | string;
  online_enabled?: boolean;
  revised_adcreative_spec?: RevisedAdcreativeSpec;
  video_end_page?: VideoEndPageSpec;
  webview_url?: string;
  simple_canvas_sub_type?: SimpleCanvasSubType;
  floating_zone?: FloatingZone;
  marketing_pendant_image_id?: string;
  barrage_list?: BarrageListCreateStruct[];
  countdown_switch?: boolean;
  app_gift_pack_code?: AppGiftPackCode;
  landing_page_options?: DynamicLandingPageInfo[];
  union_market_spec?: UnionMarketSpec;
  auto_derived_program_creative_switch?: boolean;
  head_click_type?: HeadClickType;
  head_click_spec?: HeadClickSpec;
  campaign_id?: number | string;
  industry_label?: string;
  sublink_switch?: AdvertiserSublinkSwitch;
  pic_material_switch?: AdvertiserPicMaterialSwitch;
  link_name_text?: string;
  account_id?: number | string;
}

