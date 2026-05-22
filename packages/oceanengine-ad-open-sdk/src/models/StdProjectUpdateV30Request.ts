// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { StdProjectUpdateV30AigcDynamicCreativeSwitch, StdProjectUpdateV30AudienceType, StdProjectUpdateV30AutoExtendTraffic, StdProjectUpdateV30DownloadMode, StdProjectUpdateV30IsCommentDisable, StdProjectUpdateV30RequestAudience, StdProjectUpdateV30RequestBrandInfo, StdProjectUpdateV30RequestInternalAdvertiserInfo, StdProjectUpdateV30RequestKeywordsInner, StdProjectUpdateV30RequestProjectMaterials, StdProjectUpdateV30RequestTrackUrlSetting, StdProjectUpdateV30ScheduleType, StdProjectUpdateV30SearchContinueDelivery } from "../models";

export interface StdProjectUpdateV30Request {
  advertiser_id: number | string;
  aigc_dynamic_creative_switch?: StdProjectUpdateV30AigcDynamicCreativeSwitch;
  audience?: StdProjectUpdateV30RequestAudience;
  audience_type?: StdProjectUpdateV30AudienceType;
  auto_extend_traffic?: StdProjectUpdateV30AutoExtendTraffic;
  bid?: number;
  blue_flow_keyword_name?: string[];
  brand_info?: StdProjectUpdateV30RequestBrandInfo;
  budget?: number;
  cpa_bid?: number;
  deep_cpabid?: number;
  download_mode?: StdProjectUpdateV30DownloadMode;
  end_time?: string;
  first_roi_goal?: number;
  internal_advertiser_info?: StdProjectUpdateV30RequestInternalAdvertiserInfo;
  is_comment_disable?: StdProjectUpdateV30IsCommentDisable;
  keywords?: StdProjectUpdateV30RequestKeywordsInner[];
  name?: string;
  project_id?: number | string;
  project_materials?: StdProjectUpdateV30RequestProjectMaterials;
  roi_goal?: number;
  schedule_time?: string;
  schedule_type?: StdProjectUpdateV30ScheduleType;
  search_continue_delivery?: StdProjectUpdateV30SearchContinueDelivery;
  star_task_id_list?: number[];
  track_url_setting?: StdProjectUpdateV30RequestTrackUrlSetting;
}

