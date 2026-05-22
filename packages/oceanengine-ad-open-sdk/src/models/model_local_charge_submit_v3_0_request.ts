// Generated from oceanengine/ad_open_sdk_go models/model_local_charge_submit_v3_0_request.go
// Do not edit manually.

import type { LocalChargeSubmitV30RequestPayInfo } from "../models/index";

export interface LocalChargeSubmitV30Request {
  charge_amount: number;
  charge_request_id: string;
  local_account_id: number | string;
  pay_info: LocalChargeSubmitV30RequestPayInfo;
}

