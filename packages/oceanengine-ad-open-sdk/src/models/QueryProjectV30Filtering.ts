// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QueryProjectV30FilteringPlatformList, QueryProjectV30FilteringProjectStatusList, QueryProjectV30FilteringReceiptStatusList, QueryProjectV30FilteringServingTypeList } from "../models";

export interface QueryProjectV30Filtering {
  advertiser_id?: number;
  cost_customer_id?: number;
  deadline_begin?: string;
  deadline_end?: string;
  platform_list?: QueryProjectV30FilteringPlatformList[];
  project_end_date_begin?: string;
  project_end_date_end?: string;
  project_start_date_begin?: string;
  project_start_date_end?: string;
  project_status_list?: QueryProjectV30FilteringProjectStatusList[];
  receipt_status_list?: QueryProjectV30FilteringReceiptStatusList[];
  serving_type_list?: QueryProjectV30FilteringServingTypeList[];
}

