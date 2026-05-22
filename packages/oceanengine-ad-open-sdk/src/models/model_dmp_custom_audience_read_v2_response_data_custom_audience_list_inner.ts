// Generated from oceanengine/ad_open_sdk_go models/model_dmp_custom_audience_read_v2_response_data_custom_audience_list_inner.go
// Do not edit manually.

import type { DmpCustomAudienceReadV2DataCustomAudienceListDeliveryStatus, DmpCustomAudienceReadV2DataCustomAudienceListSource } from "../models/index";

export interface DmpCustomAudienceReadV2ResponseDataCustomAudienceListInner {
  cover_num?: number;
  create_time?: string;
  custom_audience_id?: number | string;
  data_source_id?: string;
  delivery_status?: DmpCustomAudienceReadV2DataCustomAudienceListDeliveryStatus;
  exist_pull_off_tag?: number;
  isdel?: number;
  modify_time?: string;
  name?: string;
  push_status?: number;
  source?: DmpCustomAudienceReadV2DataCustomAudienceListSource;
  status?: number;
  tag?: string;
  third_party_info?: string;
  upload_num?: number;
}

