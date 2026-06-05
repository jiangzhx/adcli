// 由 oceanengine/ad_open_sdk_go models/model_charge_verify_get_v3_0_response_data.go 生成
// 不要手动编辑。

import type { ChargeVerifyGetV30ResponseDataChargeContractListInner } from "../models/index";

export interface ChargeVerifyGetV30ResponseData {
  can_charge?: boolean;
  charge_contract_list?: ChargeVerifyGetV30ResponseDataChargeContractListInner[];
  min_charge_amount?: number;
}

