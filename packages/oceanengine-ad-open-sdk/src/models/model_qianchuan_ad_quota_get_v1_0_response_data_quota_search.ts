// 由 oceanengine/ad_open_sdk_go models/model_qianchuan_ad_quota_get_v1_0_response_data_quota_search.go 生成
// 不要手动编辑。

import type { QianchuanAdQuotaGetV10ResponseDataQuotaSearchDeliveryInfo, QianchuanAdQuotaGetV10ResponseDataQuotaSearchQuotaInfo, QianchuanAdQuotaGetV10ResponseDataQuotaSearchStageInfo } from "../models/index";

export interface QianchuanAdQuotaGetV10ResponseDataQuotaSearch {
  delivery_info?: QianchuanAdQuotaGetV10ResponseDataQuotaSearchDeliveryInfo;
  month_cost?: number;
  quota_gear?: number;
  quota_info?: QianchuanAdQuotaGetV10ResponseDataQuotaSearchQuotaInfo;
  stage_info?: QianchuanAdQuotaGetV10ResponseDataQuotaSearchStageInfo;
}

