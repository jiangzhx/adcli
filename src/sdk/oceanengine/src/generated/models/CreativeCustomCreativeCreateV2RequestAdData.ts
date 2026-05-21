// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { CreativeCustomCreativeCreateV2AdDataAdDownloadStatus, CreativeCustomCreativeCreateV2AdDataAnchorRelatedType, CreativeCustomCreativeCreateV2AdDataAnchorType, CreativeCustomCreativeCreateV2AdDataCreativeAutoGenerateSwitch, CreativeCustomCreativeCreateV2AdDataDynamicCreativeSwitch, CreativeCustomCreativeCreateV2AdDataEnableSmartSource, CreativeCustomCreativeCreateV2AdDataIsCommentDisable, CreativeCustomCreativeCreateV2AdDataIsFeedAndFavSee, CreativeCustomCreativeCreateV2AdDataParamsType, CreativeCustomCreativeCreateV2AdDataPriorityTrial, CreativeCustomCreativeCreateV2RequestAdDataMiniProgramInfo, CreativeCustomCreativeCreateV2RequestAdDataSupplementsInner } from "../models";

export interface CreativeCustomCreativeCreateV2RequestAdData {
  ad_category?: number;
  ad_download_status?: CreativeCustomCreativeCreateV2AdDataAdDownloadStatus;
  ad_keywords?: string[];
  anchor_id?: string;
  anchor_related_type?: CreativeCustomCreativeCreateV2AdDataAnchorRelatedType;
  anchor_type?: CreativeCustomCreativeCreateV2AdDataAnchorType;
  app_name?: string;
  creative_auto_generate_switch?: CreativeCustomCreativeCreateV2AdDataCreativeAutoGenerateSwitch;
  dpa_external_url_field?: string;
  dynamic_creative_switch?: CreativeCustomCreativeCreateV2AdDataDynamicCreativeSwitch[];
  enable_smart_source?: CreativeCustomCreativeCreateV2AdDataEnableSmartSource;
  external_url?: string;
  external_url_params?: string;
  ies_core_user_id?: string;
  is_comment_disable?: CreativeCustomCreativeCreateV2AdDataIsCommentDisable;
  is_feed_and_fav_see?: CreativeCustomCreativeCreateV2AdDataIsFeedAndFavSee;
  mini_program_info?: CreativeCustomCreativeCreateV2RequestAdDataMiniProgramInfo;
  open_url?: string;
  params_type?: CreativeCustomCreativeCreateV2AdDataParamsType;
  playable_url?: string;
  priority_trial?: CreativeCustomCreativeCreateV2AdDataPriorityTrial;
  source?: string;
  sub_link_id_list?: number[];
  supplements?: CreativeCustomCreativeCreateV2RequestAdDataSupplementsInner[];
  third_industry_id?: number;
  web_url?: string;
}

