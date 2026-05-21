// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { QueryProjectV2FilteringPlatformList, QueryProjectV2FilteringProjectStatusList, QueryProjectV2FilteringReceiptStatusList, QueryProjectV2FilteringServingTypeList } from "../models";

export interface QueryProjectV2Filtering {
  advertiser_id?: number;
  customer_id?: number;
  deadline?: string;
  platform_list?: QueryProjectV2FilteringPlatformList[];
  project_end_date_begin?: string;
  project_end_date_end?: string;
  project_start_date_begin?: string;
  project_start_date_end?: string;
  project_status_list?: QueryProjectV2FilteringProjectStatusList[];
  receipt_status_list?: QueryProjectV2FilteringReceiptStatusList[];
  serving_type_list?: QueryProjectV2FilteringServingTypeList[];
}

