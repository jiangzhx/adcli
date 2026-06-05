// 由 oceanengine/ad_open_sdk_go models/model_qianchuan_ad_status_update_v1_0_request.go 生成
// 不要手动编辑。

import type { QianchuanAdStatusUpdateV10OptStatus } from "../models/index";

export interface QianchuanAdStatusUpdateV10Request {
  ad_ids: (number | string)[];
  advertiser_id: number | string;
  budget?: number;
  opt_status: QianchuanAdStatusUpdateV10OptStatus;
  revive_budget?: number;
  schedule_fixed_range?: number;
}

