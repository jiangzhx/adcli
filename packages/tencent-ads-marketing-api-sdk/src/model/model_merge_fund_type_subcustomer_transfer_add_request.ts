// Generated from tencentad/marketing-api-go-sdk pkg/model/model_merge_fund_type_subcustomer_transfer_add_request.go
// Do not edit manually.

import type { AccountMergeTypeMap } from "../model/index";

export interface MergeFundTypeSubcustomerTransferAddRequest {
  account_id?: number | string;
  amount?: number;
  to_account_id?: number | string;
  fund_type?: AccountMergeTypeMap;
  external_bill_no?: string;
  memo?: string;
}

