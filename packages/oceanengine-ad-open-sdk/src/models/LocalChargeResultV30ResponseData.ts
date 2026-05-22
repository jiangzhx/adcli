// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { LocalChargeResultV30DataChargeStatus } from "../models";

export interface LocalChargeResultV30ResponseData {
  charge_fail_reason?: string;
  charge_order_id?: number | string;
  charge_status?: LocalChargeResultV30DataChargeStatus;
  charge_success_time?: string;
}

