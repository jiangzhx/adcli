// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { DcdChargeSubmitV30Platform, DcdChargeSubmitV30RequestPayInfo } from "../models";

export interface DcdChargeSubmitV30Request {
  advertiser_id: number;
  charge_amount: number;
  charge_request_id: string;
  pay_info: DcdChargeSubmitV30RequestPayInfo;
  platform: DcdChargeSubmitV30Platform;
}

