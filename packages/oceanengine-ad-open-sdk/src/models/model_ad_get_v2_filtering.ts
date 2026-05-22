// Generated from oceanengine/ad_open_sdk_go models/model_ad_get_v2_filtering.go
// Do not edit manually.

import type { AdGetV2FilteringStatus } from "../models/index";

export interface AdGetV2Filtering {
  ad_create_time?: string;
  ad_modify_time?: string;
  ad_name?: string;
  campaign_id?: number | string;
  ids?: (number | string)[];
  pricing_list?: string[];
  status?: AdGetV2FilteringStatus;
}

