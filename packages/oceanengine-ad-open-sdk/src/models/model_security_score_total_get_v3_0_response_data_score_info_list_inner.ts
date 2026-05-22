// Generated from oceanengine/ad_open_sdk_go models/model_security_score_total_get_v3_0_response_data_score_info_list_inner.go
// Do not edit manually.

import type { SecurityScoreTotalGetV30DataScoreInfoListIllegalType } from "../models/index";

export interface SecurityScoreTotalGetV30ResponseDataScoreInfoListInner {
  advertiser_id?: number | string;
  illegal_type: SecurityScoreTotalGetV30DataScoreInfoListIllegalType;
  score: number;
  year: string;
}

