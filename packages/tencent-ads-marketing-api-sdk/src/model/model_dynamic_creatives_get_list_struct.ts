// Generated from tencentad/marketing-api-go-sdk pkg/model/model_dynamic_creatives_get_list_struct.go
// Do not edit manually.

import type { AdvertiserPicMaterialSwitch, AdvertiserSublinkSwitch, AppGiftPackCode, BarrageListReadStruct, CampaignType, CreativeTemplateVersionType, DcAsyncJobStatus, DynamicAdcreativeSpecForDc, DynamicCreativeElementsRead, DynamicCreativeGroupUsed, DynamicCreativePageSpec, DynamicCreativeType, DynamicLandingPageInfoRead, HeadClickSpec, HeadClickType, PageTypeRead, ProgramCreativeInfo, PromotedObjectType, UnionMarketSpec, VideoEndPageSpec } from "../model/index";

export interface DynamicCreativesGetListStruct {
  dynamic_creative_id?: number | string;
  outer_adcreative_id?: number | string;
  dynamic_creative_name?: string;
  dynamic_creative_template_id?: number | string;
  dynamic_creative_elements?: DynamicCreativeElementsRead;
  page_type?: PageTypeRead;
  page_spec?: DynamicCreativePageSpec;
  deep_link_url?: string;
  automatic_site_enabled?: boolean;
  site_set?: string[];
  promoted_object_type?: PromotedObjectType;
  promoted_object_id?: string;
  profile_id?: number | string;
  created_time?: number;
  last_modified_time?: number;
  dynamic_adcreative_spec?: DynamicAdcreativeSpecForDc;
  is_deleted?: boolean;
  campaign_type?: CampaignType;
  impression_tracking_url?: string;
  click_tracking_url?: string;
  feeds_video_comment_switch?: boolean;
  union_market_switch?: boolean;
  video_end_page?: VideoEndPageSpec;
  barrage_list?: BarrageListReadStruct[];
  dynamic_creative_group_used?: DynamicCreativeGroupUsed;
  app_gift_pack_code?: AppGiftPackCode;
  enable_breakthrough_siteset?: boolean;
  creative_template_version_type?: CreativeTemplateVersionType;
  landing_page_options?: DynamicLandingPageInfoRead[];
  union_market_spec?: UnionMarketSpec;
  creative_template_category?: string;
  auto_derived_program_creative_switch?: boolean;
  program_creative_info?: ProgramCreativeInfo;
  dynamic_creative_type?: DynamicCreativeType;
  head_click_type?: HeadClickType;
  head_click_spec?: HeadClickSpec;
  async_job_status?: DcAsyncJobStatus;
  page_track_url?: string;
  industry_label?: string;
  sublink_switch?: AdvertiserSublinkSwitch;
  pic_material_switch?: AdvertiserPicMaterialSwitch;
}

