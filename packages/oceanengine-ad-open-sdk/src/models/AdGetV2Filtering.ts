// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { AdGetV2FilteringStatus } from "../models";

export interface AdGetV2Filtering {
  ad_create_time?: string;
  ad_modify_time?: string;
  ad_name?: string;
  campaign_id?: number | string;
  ids?: number | string[];
  pricing_list?: string[];
  status?: AdGetV2FilteringStatus;
}

