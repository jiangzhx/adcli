// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_audience_list_get_v1_0_response_data_audiences_list_inner.go
// Do not edit manually.

import type { QianchuanAudienceListGetV10DataAudiencesListAudienceSource, QianchuanAudienceListGetV10DataAudiencesListAudienceType } from "../models/index";

export interface QianchuanAudienceListGetV10ResponseDataAudiencesListInner {
  audience_group?: string;
  audience_id?: number | string;
  audience_name?: string;
  audience_source?: QianchuanAudienceListGetV10DataAudiencesListAudienceSource;
  audience_type?: QianchuanAudienceListGetV10DataAudiencesListAudienceType;
  create_time?: string;
  push_product?: string;
  status?: number;
  stock_num?: number;
  stock_status?: number;
}

