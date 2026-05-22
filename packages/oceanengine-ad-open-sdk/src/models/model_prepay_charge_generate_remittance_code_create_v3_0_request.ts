// Generated from oceanengine/ad_open_sdk_go models/model_prepay_charge_generate_remittance_code_create_v3_0_request.go
// Do not edit manually.

import type { PrepayChargeGenerateRemittanceCodeCreateV30Caller, PrepayChargeGenerateRemittanceCodeCreateV30ChargeTargetType, PrepayChargeGenerateRemittanceCodeCreateV30ChargeType, PrepayChargeGenerateRemittanceCodeCreateV30Platform, PrepayChargeGenerateRemittanceCodeCreateV30RequestContractInfo } from "../models/index";

export interface PrepayChargeGenerateRemittanceCodeCreateV30Request {
  caller: PrepayChargeGenerateRemittanceCodeCreateV30Caller;
  cc_account_id: number | string;
  charge_amount: number;
  charge_target_id: number | string;
  charge_target_type: PrepayChargeGenerateRemittanceCodeCreateV30ChargeTargetType;
  charge_type: PrepayChargeGenerateRemittanceCodeCreateV30ChargeType;
  contract_info?: PrepayChargeGenerateRemittanceCodeCreateV30RequestContractInfo;
  platform?: PrepayChargeGenerateRemittanceCodeCreateV30Platform;
  request_id: string;
}

