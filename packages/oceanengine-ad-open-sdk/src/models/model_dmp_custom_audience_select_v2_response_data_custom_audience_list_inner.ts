// Generated from oceanengine/ad_open_sdk_go models/model_dmp_custom_audience_select_v2_response_data_custom_audience_list_inner.go
// Do not edit manually.

import type { DmpCustomAudienceSelectV2DataCustomAudienceListDeliveryStatus, DmpCustomAudienceSelectV2DataCustomAudienceListSource } from "../models/index";

export interface DmpCustomAudienceSelectV2ResponseDataCustomAudienceListInner {
  cover_num?: number;
  custom_audience_id?: number | string;
  data_source_id?: string;
  delivery_status?: DmpCustomAudienceSelectV2DataCustomAudienceListDeliveryStatus;
  isdel?: number;
  name?: string;
  source?: DmpCustomAudienceSelectV2DataCustomAudienceListSource;
  status?: number;
  tag?: string;
  upload_num?: number;
}

