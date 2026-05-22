// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { RemittanceCodeListV30DataRemittanceInfoListPlatform, RemittanceCodeListV30DataRemittanceInfoListRemittanceCodeStatus } from "../models";

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

