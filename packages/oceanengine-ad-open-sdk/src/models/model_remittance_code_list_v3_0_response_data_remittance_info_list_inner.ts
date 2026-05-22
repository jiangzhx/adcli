// Generated from oceanengine/ad_open_sdk_go models/model_remittance_code_list_v3_0_response_data_remittance_info_list_inner.go
// Do not edit manually.

import type { RemittanceCodeListV30DataRemittanceInfoListPlatform, RemittanceCodeListV30DataRemittanceInfoListRemittanceCodeStatus } from "../models/index";

export interface RemittanceCodeListV30ResponseDataRemittanceInfoListInner {
  charge_amount?: number;
  charge_target_id?: number | string;
  code_create_time?: string;
  contract_serial?: string;
  fail_reason?: string;
  platform?: RemittanceCodeListV30DataRemittanceInfoListPlatform;
  remark?: string;
  remittance_code?: string;
  remittance_code_status?: RemittanceCodeListV30DataRemittanceInfoListRemittanceCodeStatus;
}

