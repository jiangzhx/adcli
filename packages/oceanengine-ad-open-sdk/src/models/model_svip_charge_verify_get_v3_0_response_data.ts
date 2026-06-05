// 由 oceanengine/ad_open_sdk_go models/model_svip_charge_verify_get_v3_0_response_data.go 生成
// 不要手动编辑。

import type { SvipChargeVerifyGetV30ResponseDataChargeContractListInner } from "../models/index";

export interface SvipChargeVerifyGetV30ResponseData {
  can_charge?: boolean;
  charge_contract_list?: SvipChargeVerifyGetV30ResponseDataChargeContractListInner[];
  min_charge_amount?: number;
}

