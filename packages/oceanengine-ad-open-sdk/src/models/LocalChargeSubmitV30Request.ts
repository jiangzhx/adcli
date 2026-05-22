// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { LocalChargeSubmitV30RequestPayInfo } from "../models";

export interface LocalChargeSubmitV30Request {
  charge_amount: number;
  charge_request_id: string;
  local_account_id: number;
  pay_info: LocalChargeSubmitV30RequestPayInfo;
}

