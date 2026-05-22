// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_fund_transfer_add_request.go
// Do not edit manually.

import type { AccountTypeMap } from "../v3/index";

export interface FundTransferAddRequest {
  account_id?: number | string;
  fund_type?: AccountTypeMap;
  amount?: number;
  transfer_type?: string;
  external_bill_no?: string;
  memo?: string;
  transfer_try_best?: number;
  high_frequency_transfer?: number;
  pre_fetch_amount?: number;
  pre_check?: number;
}

