// 由 oceanengine/ad_open_sdk_go models/model_qianchuan_aweme_order_quota_get_v1_0_response_data.go 生成
// 不要手动编辑。

import type { QianchuanAwemeOrderQuotaGetV10ResponseDataTerminateQuotaInfo } from "../models/index";

export interface QianchuanAwemeOrderQuotaGetV10ResponseData {
  max_cost?: number;
  quota_gear?: number;
  sum_quota?: number;
  terminate_quota_info?: QianchuanAwemeOrderQuotaGetV10ResponseDataTerminateQuotaInfo;
  used_quota?: number;
}

