// 由 oceanengine/ad_open_sdk_go models/model_charge_verify_get_v3_0_response_data_charge_contract_list_inner.go 生成
// 不要手动编辑。

import type { ChargeVerifyGetV30DataChargeContractListAllowDeliveryTypeList } from "../models/index";

export interface ChargeVerifyGetV30ResponseDataChargeContractListInner {
  allow_delivery_type_list?: ChargeVerifyGetV30DataChargeContractListAllowDeliveryTypeList[];
  cont_begin_date?: string;
  cont_end_date?: string;
  contract_id?: number | string;
  contract_name?: string;
  contract_serial?: string;
  customer_name?: string;
  subject_name?: string;
}

