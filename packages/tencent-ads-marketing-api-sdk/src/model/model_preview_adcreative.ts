// Generated from tencentad/marketing-api-go-sdk pkg/model/model_preview_adcreative.go
// Do not edit manually.

import type { AdcreativeCreativeElements, ConversionDataType, ConversionTargetType, DynamicAdcreativeSpec, PageSpec, PageTypeRead, PromotedObjectType, RevisedAdcreativeSpec, ShareContentSpec, VideoEndPageSpec } from "../model/index";

export interface PreviewAdcreative {
  adcreative_name?: string;
  site_set?: string[];
  promoted_object_type?: PromotedObjectType;
  promoted_object_id?: string;
  page_type?: PageTypeRead;
  page_spec?: PageSpec;
  qq_mini_game_tracking_query_string?: string;
  deep_link_url?: string;
  universal_link_url?: string;
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
  category?: number[];
  label?: string[];
  union_market_switch?: boolean;
  playable_page_material_id?: string;
  video_end_page?: VideoEndPageSpec;
  feeds_video_comment_switch?: boolean;
  conversion_data_type?: ConversionDataType;
  conversion_target_type?: ConversionTargetType;
  adcreative_template_id?: number | string;
  adcreative_elements?: AdcreativeCreativeElements;
}

