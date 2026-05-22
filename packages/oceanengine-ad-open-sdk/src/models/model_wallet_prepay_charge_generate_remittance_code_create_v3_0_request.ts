// Generated from oceanengine/ad_open_sdk_go models/model_wallet_prepay_charge_generate_remittance_code_create_v3_0_request.go
// Do not edit manually.

import type { WalletPrepayChargeGenerateRemittanceCodeCreateV30Caller, WalletPrepayChargeGenerateRemittanceCodeCreateV30ChargeTargetType, WalletPrepayChargeGenerateRemittanceCodeCreateV30DeliveryType, WalletPrepayChargeGenerateRemittanceCodeCreateV30Platform } from "../models/index";

export interface WalletPrepayChargeGenerateRemittanceCodeCreateV30Request {
  account_id: number | string;
  caller: WalletPrepayChargeGenerateRemittanceCodeCreateV30Caller;
  charge_amount: number;
  charge_target_id: number | string;
  charge_target_type: WalletPrepayChargeGenerateRemittanceCodeCreateV30ChargeTargetType;
  delivery_type: WalletPrepayChargeGenerateRemittanceCodeCreateV30DeliveryType;
  platform: WalletPrepayChargeGenerateRemittanceCodeCreateV30Platform;
  request_id: string;
}

