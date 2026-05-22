// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_subcustomer_transfer_add_request.go
// Do not edit manually.

import type { AccountTypeMap } from "../v3/index";

export interface SubcustomerTransferAddRequest {
  account_id?: number | string;
  amount?: number;
  to_account_id?: number | string;
  fund_type?: AccountTypeMap;
  external_bill_no?: string;
  memo?: string;
  pre_fetch_amount?: number;
}

