// Generated from oceanengine/ad_open_sdk_go models/model_prepay_charge_generate_fix_remiattance_code_create_v3_0_request.go
// Do not edit manually.

import type { PrepayChargeGenerateFixRemiattanceCodeCreateV30Caller, PrepayChargeGenerateFixRemiattanceCodeCreateV30ChargeTargetType, PrepayChargeGenerateFixRemiattanceCodeCreateV30ChargeType, PrepayChargeGenerateFixRemiattanceCodeCreateV30Platform } from "../models/index";

export interface PrepayChargeGenerateFixRemiattanceCodeCreateV30Request {
  caller: PrepayChargeGenerateFixRemiattanceCodeCreateV30Caller;
  cc_account_id: number | string;
  charge_amount: number;
  charge_target_id: number | string;
  charge_target_type: PrepayChargeGenerateFixRemiattanceCodeCreateV30ChargeTargetType;
  charge_type: PrepayChargeGenerateFixRemiattanceCodeCreateV30ChargeType;
  platform: PrepayChargeGenerateFixRemiattanceCodeCreateV30Platform;
  request_id: string;
}

