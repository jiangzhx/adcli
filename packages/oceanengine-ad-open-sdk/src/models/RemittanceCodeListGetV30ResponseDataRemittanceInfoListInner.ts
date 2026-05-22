// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { RemittanceCodeListGetV30DataRemittanceInfoListPlatform, RemittanceCodeListGetV30DataRemittanceInfoListRemittanceCodeStatus } from "../models";

export interface RemittanceCodeListGetV30ResponseDataRemittanceInfoListInner {
  charge_amount?: number;
  charge_finish_time?: string;
  charge_target_id?: number;
  code_create_time?: string;
  contract_serial?: string;
  fail_reason?: string;
  flow_id?: string;
  platform?: RemittanceCodeListGetV30DataRemittanceInfoListPlatform;
  receive_date?: string;
  remark?: string;
  remittance_code?: string;
  remittance_code_status?: RemittanceCodeListGetV30DataRemittanceInfoListRemittanceCodeStatus;
}

