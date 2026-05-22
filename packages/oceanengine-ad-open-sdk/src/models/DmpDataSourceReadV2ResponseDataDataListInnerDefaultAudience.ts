// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { DmpDataSourceReadV2DataDataListDefaultAudienceDeliveryStatus } from "../models";

export interface DmpDataSourceReadV2ResponseDataDataListInnerDefaultAudience {
  advertiser_id?: number | string;
  calculate_sub_type?: number;
  calculate_type?: number;
  cover_num?: number;
  create_time?: string;
  custom_audience_id?: number | string;
  custom_type?: number;
  data_source_id?: string;
  delivery_status?: DmpDataSourceReadV2DataDataListDefaultAudienceDeliveryStatus;
  expiry_date?: string;
  isdel?: number;
  modify_time?: string;
  name?: string;
  push_status?: number;
  source?: number;
  status?: number;
  tag?: string;
  third_party_info?: string;
  upload_num?: number;
}

