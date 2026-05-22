// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { StarDemandCreateChallengeV2RequestDemandInfoAdSyncConf, StarDemandCreateChallengeV2RequestDemandInfoChallengeRequirement, StarDemandCreateChallengeV2RequestDemandInfoComponentInfo, StarDemandCreateChallengeV2RequestDemandInfoObjectFieldInfo } from "../models";

export interface StarDemandCreateChallengeV2RequestDemandInfo {
  ad_sync_conf?: StarDemandCreateChallengeV2RequestDemandInfoAdSyncConf;
  attachment_text?: string;
  attachments?: string[];
  attatchments_url?: string[];
  brand_name: string;
  challenge_requirement?: StarDemandCreateChallengeV2RequestDemandInfoChallengeRequirement;
  component_click_monitor_url?: string;
  component_info?: StarDemandCreateChallengeV2RequestDemandInfoComponentInfo;
  contact_name: string;
  contact_phone: string;
  demand_name: string;
  expiration_time?: number;
  expiration_time_end?: number;
  ip_act_id?: number;
  item_show_monitor_url?: string;
  object_field_info?: StarDemandCreateChallengeV2RequestDemandInfoObjectFieldInfo;
  product_category?: string[];
  product_industry: string[];
  product_information: string;
  product_link?: string;
  product_name: string;
  project_id?: number;
  promotion_target?: string;
}

