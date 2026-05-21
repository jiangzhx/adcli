// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { CreativeCustomCreativeUpdateV2AdDataAdDownloadStatus, CreativeCustomCreativeUpdateV2AdDataAnchorRelatedType, CreativeCustomCreativeUpdateV2AdDataAnchorType, CreativeCustomCreativeUpdateV2AdDataCreativeAutoGenerateSwitch, CreativeCustomCreativeUpdateV2AdDataDynamicCreativeSwitch, CreativeCustomCreativeUpdateV2AdDataEnableSmartSource, CreativeCustomCreativeUpdateV2AdDataIsCommentDisable, CreativeCustomCreativeUpdateV2AdDataIsFeedAndFavSee, CreativeCustomCreativeUpdateV2AdDataParamsType, CreativeCustomCreativeUpdateV2AdDataPriorityTrial, CreativeCustomCreativeUpdateV2RequestAdDataMiniProgramInfo, CreativeCustomCreativeUpdateV2RequestAdDataSupplementsInner } from "../models";

export interface CreativeCustomCreativeUpdateV2RequestAdData {
  ad_category?: number;
  ad_download_status?: CreativeCustomCreativeUpdateV2AdDataAdDownloadStatus;
  ad_keywords?: string[];
  anchor_id?: string;
  anchor_related_type?: CreativeCustomCreativeUpdateV2AdDataAnchorRelatedType;
  anchor_type?: CreativeCustomCreativeUpdateV2AdDataAnchorType;
  app_name?: string;
  creative_auto_generate_switch?: CreativeCustomCreativeUpdateV2AdDataCreativeAutoGenerateSwitch;
  dpa_external_url_field?: string;
  dynamic_creative_switch?: CreativeCustomCreativeUpdateV2AdDataDynamicCreativeSwitch[];
  enable_smart_source?: CreativeCustomCreativeUpdateV2AdDataEnableSmartSource;
  external_url?: string;
  external_url_params?: string;
  ies_core_user_id?: string;
  is_comment_disable?: CreativeCustomCreativeUpdateV2AdDataIsCommentDisable;
  is_feed_and_fav_see?: CreativeCustomCreativeUpdateV2AdDataIsFeedAndFavSee;
  mini_program_info?: CreativeCustomCreativeUpdateV2RequestAdDataMiniProgramInfo;
  open_url?: string;
  params_type?: CreativeCustomCreativeUpdateV2AdDataParamsType;
  playable_url?: string;
  priority_trial?: CreativeCustomCreativeUpdateV2AdDataPriorityTrial;
  source?: string;
  sub_link_id_list?: number[];
  supplements?: CreativeCustomCreativeUpdateV2RequestAdDataSupplementsInner[];
  third_industry_id?: number;
  web_url?: string;
}

