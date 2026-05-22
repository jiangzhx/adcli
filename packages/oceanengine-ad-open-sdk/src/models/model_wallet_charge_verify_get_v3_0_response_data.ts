// Generated from oceanengine/ad_open_sdk_go models/model_wallet_charge_verify_get_v3_0_response_data.go
// Do not edit manually.

import type { WalletChargeVerifyGetV30DataAllowDeliveryTypeList } from "../models/index";

export interface WalletChargeVerifyGetV30ResponseData {
  allow_delivery_type_list?: WalletChargeVerifyGetV30DataAllowDeliveryTypeList[];
  company_id?: number | string;
  company_name?: string;
  customer_id?: number | string;
  customer_name?: string;
  subject_name?: string;
  wallet_id?: number | string;
  wallet_name?: string;
}

