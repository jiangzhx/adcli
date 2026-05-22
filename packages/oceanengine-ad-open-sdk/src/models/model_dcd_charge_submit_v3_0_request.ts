// Generated from oceanengine/ad_open_sdk_go models/model_dcd_charge_submit_v3_0_request.go
// Do not edit manually.

import type { DcdChargeSubmitV30Platform, DcdChargeSubmitV30RequestPayInfo } from "../models/index";

export interface DcdChargeSubmitV30Request {
  advertiser_id: number | string;
  charge_amount: number;
  charge_request_id: string;
  pay_info: DcdChargeSubmitV30RequestPayInfo;
  platform: DcdChargeSubmitV30Platform;
}

