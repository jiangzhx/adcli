// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { CreativeDetailGetV30DataAdDataAnchorRelatedType, CreativeDetailGetV30DataAdDataAnchorType, CreativeDetailGetV30DataAdDataDynamicCreativeSwitch, CreativeDetailGetV30DataAdDataEnableSmartSource, CreativeDetailGetV30DataAdDataParamsType, CreativeDetailGetV30DataAdDataPriorityTrial, CreativeDetailGetV30ResponseDataAdDataMiniProgramInfo, CreativeDetailGetV30ResponseDataAdDataSupplementsInner } from "../models";

export interface CreativeDetailGetV30ResponseDataAdData {
  ad_download_status?: number;
  ad_keywords?: string[];
  anchor_id?: string;
  anchor_related_type?: CreativeDetailGetV30DataAdDataAnchorRelatedType;
  anchor_type?: CreativeDetailGetV30DataAdDataAnchorType;
  app_name?: string;
  creative_auto_generate_switch?: number;
  dpa_external_url_field?: string;
  dynamic_creative_switch?: CreativeDetailGetV30DataAdDataDynamicCreativeSwitch[];
  enable_smart_source?: CreativeDetailGetV30DataAdDataEnableSmartSource;
  external_url?: string;
  external_url_params?: string;
  ies_core_user_id?: string;
  is_comment_disable?: number;
  is_feed_and_fav_see?: number;
  is_presented_video?: number;
  mini_program_info?: CreativeDetailGetV30ResponseDataAdDataMiniProgramInfo;
  open_url?: string;
  params_type?: CreativeDetailGetV30DataAdDataParamsType;
  playable_url?: string;
  priority_trial?: CreativeDetailGetV30DataAdDataPriorityTrial;
  source?: string;
  supplements?: CreativeDetailGetV30ResponseDataAdDataSupplementsInner[];
  third_industry_id?: number;
  web_url?: string;
}

