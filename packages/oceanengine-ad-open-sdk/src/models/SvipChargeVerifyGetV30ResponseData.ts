// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { SvipChargeVerifyGetV30ResponseDataChargeContractListInner } from "../models";

export interface SvipChargeVerifyGetV30ResponseData {
  can_charge?: boolean;
  charge_contract_list?: SvipChargeVerifyGetV30ResponseDataChargeContractListInner[];
  min_charge_amount?: number;
}

