// Generated from oceanengine/ad_open_sdk_go models/model_svip_charge_verify_get_v3_0_response_data.go
// Do not edit manually.

import type { SvipChargeVerifyGetV30ResponseDataChargeContractListInner } from "../models/index";

export interface SvipChargeVerifyGetV30ResponseData {
  can_charge?: boolean;
  charge_contract_list?: SvipChargeVerifyGetV30ResponseDataChargeContractListInner[];
  min_charge_amount?: number;
}

