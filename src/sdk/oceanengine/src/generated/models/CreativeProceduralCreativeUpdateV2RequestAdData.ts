// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { CreativeProceduralCreativeUpdateV2AdDataAdDownloadStatus, CreativeProceduralCreativeUpdateV2AdDataAnchorRelatedType, CreativeProceduralCreativeUpdateV2AdDataAnchorType, CreativeProceduralCreativeUpdateV2AdDataCreativeAutoGenerateSwitch, CreativeProceduralCreativeUpdateV2AdDataDynamicCreativeSwitch, CreativeProceduralCreativeUpdateV2AdDataEnableSmartSource, CreativeProceduralCreativeUpdateV2AdDataIsCommentDisable, CreativeProceduralCreativeUpdateV2AdDataIsFeedAndFavSee, CreativeProceduralCreativeUpdateV2AdDataIsPresentedVideo, CreativeProceduralCreativeUpdateV2AdDataParamsType, CreativeProceduralCreativeUpdateV2AdDataPriorityTrial, CreativeProceduralCreativeUpdateV2RequestAdDataMiniProgramInfo, CreativeProceduralCreativeUpdateV2RequestAdDataSupplementsInner } from "../models";

export interface CreativeProceduralCreativeUpdateV2RequestAdData {
  ad_category?: number;
  ad_download_status?: CreativeProceduralCreativeUpdateV2AdDataAdDownloadStatus;
  ad_keywords?: string[];
  anchor_id?: string;
  anchor_related_type?: CreativeProceduralCreativeUpdateV2AdDataAnchorRelatedType;
  anchor_type?: CreativeProceduralCreativeUpdateV2AdDataAnchorType;
  app_name?: string;
  creative_auto_generate_switch?: CreativeProceduralCreativeUpdateV2AdDataCreativeAutoGenerateSwitch;
  dpa_external_url_field?: string;
  dynamic_creative_switch?: CreativeProceduralCreativeUpdateV2AdDataDynamicCreativeSwitch[];
  enable_smart_source?: CreativeProceduralCreativeUpdateV2AdDataEnableSmartSource;
  external_url?: string;
  external_url_params?: string;
  ies_core_user_id?: string;
  is_comment_disable?: CreativeProceduralCreativeUpdateV2AdDataIsCommentDisable;
  is_feed_and_fav_see?: CreativeProceduralCreativeUpdateV2AdDataIsFeedAndFavSee;
  is_presented_video?: CreativeProceduralCreativeUpdateV2AdDataIsPresentedVideo;
  mini_program_info?: CreativeProceduralCreativeUpdateV2RequestAdDataMiniProgramInfo;
  open_url?: string;
  params_type?: CreativeProceduralCreativeUpdateV2AdDataParamsType;
  playable_url?: string;
  priority_trial?: CreativeProceduralCreativeUpdateV2AdDataPriorityTrial;
  source?: string;
  sub_link_id_list?: number[];
  supplements?: CreativeProceduralCreativeUpdateV2RequestAdDataSupplementsInner[];
  third_industry_id?: number;
  web_url?: string;
}

