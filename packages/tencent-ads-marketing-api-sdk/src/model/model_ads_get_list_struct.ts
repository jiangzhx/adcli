// Generated from tencentad/marketing-api-go-sdk pkg/model/model_ads_get_list_struct.go
// Do not edit manually.

import type { AdStatus, Adcreative, AuditSpecStruct } from "../model/index";

export interface AdsGetListStruct {
  campaign_id?: number | string;
  adgroup_id?: number | string;
  ad_id?: number | string;
  ad_name?: string;
  adcreative_id?: number | string;
  adcreative?: Adcreative;
  configured_status?: AdStatus;
  system_status?: AdStatus;
  audit_spec?: AuditSpecStruct[];
  impression_tracking_url?: string;
  click_tracking_url?: string;
  feeds_interaction_enabled?: boolean;
  is_deleted?: boolean;
  is_dynamic_creative?: boolean;
  created_time?: number;
  last_modified_time?: number;
  reject_message?: string;
}

