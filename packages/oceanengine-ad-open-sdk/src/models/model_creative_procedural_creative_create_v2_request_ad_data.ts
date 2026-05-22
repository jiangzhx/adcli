// Generated from oceanengine/ad_open_sdk_go models/model_creative_procedural_creative_create_v2_request_ad_data.go
// Do not edit manually.

import type { CreativeProceduralCreativeCreateV2AdDataAdDownloadStatus, CreativeProceduralCreativeCreateV2AdDataAnchorRelatedType, CreativeProceduralCreativeCreateV2AdDataAnchorType, CreativeProceduralCreativeCreateV2AdDataCreativeAutoGenerateSwitch, CreativeProceduralCreativeCreateV2AdDataDynamicCreativeSwitch, CreativeProceduralCreativeCreateV2AdDataEnableSmartSource, CreativeProceduralCreativeCreateV2AdDataIsCommentDisable, CreativeProceduralCreativeCreateV2AdDataIsFeedAndFavSee, CreativeProceduralCreativeCreateV2AdDataIsPresentedVideo, CreativeProceduralCreativeCreateV2AdDataParamsType, CreativeProceduralCreativeCreateV2AdDataPriorityTrial, CreativeProceduralCreativeCreateV2RequestAdDataMiniProgramInfo, CreativeProceduralCreativeCreateV2RequestAdDataSupplementsInner } from "../models/index";

export interface CreativeProceduralCreativeCreateV2RequestAdData {
  ad_category?: number;
  ad_download_status?: CreativeProceduralCreativeCreateV2AdDataAdDownloadStatus;
  ad_keywords?: string[];
  anchor_id?: string;
  anchor_related_type?: CreativeProceduralCreativeCreateV2AdDataAnchorRelatedType;
  anchor_type?: CreativeProceduralCreativeCreateV2AdDataAnchorType;
  app_name?: string;
  creative_auto_generate_switch?: CreativeProceduralCreativeCreateV2AdDataCreativeAutoGenerateSwitch;
  dpa_external_url_field?: string;
  dynamic_creative_switch?: CreativeProceduralCreativeCreateV2AdDataDynamicCreativeSwitch[];
  enable_smart_source?: CreativeProceduralCreativeCreateV2AdDataEnableSmartSource;
  external_url?: string;
  external_url_params?: string;
  ies_core_user_id?: string;
  is_comment_disable?: CreativeProceduralCreativeCreateV2AdDataIsCommentDisable;
  is_feed_and_fav_see?: CreativeProceduralCreativeCreateV2AdDataIsFeedAndFavSee;
  is_presented_video?: CreativeProceduralCreativeCreateV2AdDataIsPresentedVideo;
  mini_program_info?: CreativeProceduralCreativeCreateV2RequestAdDataMiniProgramInfo;
  open_url?: string;
  params_type?: CreativeProceduralCreativeCreateV2AdDataParamsType;
  playable_url?: string;
  priority_trial?: CreativeProceduralCreativeCreateV2AdDataPriorityTrial;
  source?: string;
  sub_link_id_list?: number[];
  supplements?: CreativeProceduralCreativeCreateV2RequestAdDataSupplementsInner[];
  third_industry_id?: number | string;
  web_url?: string;
}

