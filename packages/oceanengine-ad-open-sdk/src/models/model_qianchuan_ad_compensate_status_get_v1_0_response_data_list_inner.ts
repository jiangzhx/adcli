// 由 oceanengine/ad_open_sdk_go models/model_qianchuan_ad_compensate_status_get_v1_0_response_data_list_inner.go 生成
// 不要手动编辑。

import type { QianchuanAdCompensateStatusGetV10DataListCompensateStatus, QianchuanAdCompensateStatusGetV10DataListStatus } from "../models/index";

export interface QianchuanAdCompensateStatusGetV10ResponseDataListInner {
  ad_id?: number | string;
  compensate_status?: QianchuanAdCompensateStatusGetV10DataListCompensateStatus;
  reason?: string;
  status?: QianchuanAdCompensateStatusGetV10DataListStatus;
  url?: string;
}

