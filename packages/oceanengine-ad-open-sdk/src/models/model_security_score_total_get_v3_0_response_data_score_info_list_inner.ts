// 由 oceanengine/ad_open_sdk_go models/model_security_score_total_get_v3_0_response_data_score_info_list_inner.go 生成
// 不要手动编辑。

import type { SecurityScoreTotalGetV30DataScoreInfoListIllegalType } from "../models/index";

export interface SecurityScoreTotalGetV30ResponseDataScoreInfoListInner {
  advertiser_id?: number | string;
  illegal_type: SecurityScoreTotalGetV30DataScoreInfoListIllegalType;
  score: number;
  year: string;
}

