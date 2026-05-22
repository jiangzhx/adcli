// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ChargeVerifyGetV30DataChargeContractListAllowDeliveryTypeList } from "../models";

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

