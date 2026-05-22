// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_audience_list_get_v1_0_filtering.go
// Do not edit manually.

import type { QianchuanAudienceListGetV10FilteringAudienceType } from "../models/index";

export interface QianchuanAudienceListGetV10Filtering {
  audience_id?: (number | string)[];
  audience_name?: string;
  audience_type?: QianchuanAudienceListGetV10FilteringAudienceType[];
  end_time?: string;
  start_time?: string;
  status?: number[];
}

