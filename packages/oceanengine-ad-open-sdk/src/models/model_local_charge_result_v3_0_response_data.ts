// 由 oceanengine/ad_open_sdk_go models/model_local_charge_result_v3_0_response_data.go 生成
// 不要手动编辑。

import type { LocalChargeResultV30DataChargeStatus } from "../models/index";

export interface LocalChargeResultV30ResponseData {
  charge_fail_reason?: string;
  charge_order_id?: number | string;
  charge_status?: LocalChargeResultV30DataChargeStatus;
  charge_success_time?: string;
}

