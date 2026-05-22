// Generated from tencentad/marketing-api-go-sdk pkg/model/model_subcustomer_transfer_add_request.go
// Do not edit manually.

import type { AccountTypeMap } from "../model/index";

export interface SubcustomerTransferAddRequest {
  account_id?: number | string;
  amount?: number;
  to_account_id?: number | string;
  fund_type?: AccountTypeMap;
  external_bill_no?: string;
  memo?: string;
}

