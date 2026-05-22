// Generated from oceanengine/ad_open_sdk_go models/model_agent_charge_verify_v2_response_data_charge_contract_list_inner.go
// Do not edit manually.

import type { AgentChargeVerifyV2DataChargeContractListAllowDeliveryTypeList } from "../models/index";

export interface AgentChargeVerifyV2ResponseDataChargeContractListInner {
  allow_delivery_type_list?: AgentChargeVerifyV2DataChargeContractListAllowDeliveryTypeList[];
  cont_begin_date?: string;
  cont_end_date?: string;
  contract_id?: number | string;
  contract_name?: string;
  contract_serial?: string;
  customer_name?: string;
  subject_name?: string;
}

