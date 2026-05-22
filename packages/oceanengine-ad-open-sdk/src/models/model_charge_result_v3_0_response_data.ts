// Generated from oceanengine/ad_open_sdk_go models/model_charge_result_v3_0_response_data.go
// Do not edit manually.

import type { ChargeResultV30DataChargeStatus } from "../models/index";

export interface ChargeResultV30ResponseData {
  charge_fail_reason?: string;
  charge_order_id?: number | string;
  charge_status?: ChargeResultV30DataChargeStatus;
  charge_success_time?: string;
}

