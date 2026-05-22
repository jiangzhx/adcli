// Generated from tencentad/marketing-api-go-sdk pkg/model/model_adcreatives_get_list_struct.go
// Do not edit manually.

import type { AdCreativeSource, AdcreativeCreativeElementsReadMp, AndroidQuickAppSpec, AppGiftPackCode, BarrageListReadStruct, ConversionDataType, ConversionTargetType, CreativeTemplateVersionType, DynamicAdcreativeSpec, FloatingZone, HeadClickSpec, HeadClickType, LinkPageSpec, LinkPageType, LinkUrlLinkNameType, LiveVideoMode, LiveVideoSubMode, PageSpec, PageTypeRead, PromotedObjectType, RevisedAdcreativeSpec, ShareContentSpec, SimpleCanvasSubType, UnionMarketSpec, VideoEndPageSpec } from "../model/index";

export interface AdcreativesGetListStruct {
  campaign_id?: number | string;
  adcreative_id?: number | string;
  outer_adcreative_id?: number | string;
  adcreative_name?: string;
  page_type?: PageTypeRead;
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
  site_set?: string[];
  automatic_site_enabled?: boolean;
  promoted_object_type?: PromotedObjectType;
  promoted_object_id?: string;
  profile_id?: number | string;
  created_time?: number;
  last_modified_time?: number;
  share_content_spec?: ShareContentSpec;
  dynamic_adcreative_spec?: DynamicAdcreativeSpec;
  is_deleted?: boolean;
  is_dynamic_creative?: boolean;
  component_id?: number | string;
  online_enabled?: boolean;
  revised_adcreative_spec?: RevisedAdcreativeSpec;
  union_market_switch?: boolean;
  playable_page_material_id?: string;
  video_end_page?: VideoEndPageSpec;
  feeds_video_comment_switch?: boolean;
  webview_url?: string;
  simple_canvas_sub_type?: SimpleCanvasSubType;
  floating_zone?: FloatingZone;
  marketing_pendant_image_id?: string;
  countdown_switch?: boolean;
  source?: AdCreativeSource;
  page_track_url?: string;
  head_click_type?: HeadClickType;
  head_click_spec?: HeadClickSpec;
  barrage_list?: BarrageListReadStruct[];
  app_gift_pack_code?: AppGiftPackCode;
  enable_breakthrough_siteset?: boolean;
  creative_template_version_type?: CreativeTemplateVersionType;
  industry_label?: string;
  union_market_spec?: UnionMarketSpec;
  creative_template_category?: string;
  android_quick_app_spec?: AndroidQuickAppSpec;
  live_video_mode?: LiveVideoMode;
  live_video_sub_mode?: LiveVideoSubMode;
  link_name_text?: string;
  dynamic_creative_id?: number | string;
  adcreative_template_id?: number | string;
  adcreative_elements?: AdcreativeCreativeElementsReadMp;
}

