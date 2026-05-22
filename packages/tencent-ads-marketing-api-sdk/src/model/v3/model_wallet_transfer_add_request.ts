// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_wallet_transfer_add_request.go
// Do not edit manually.

import type { AccountTypeMap } from "../v3/index";

export interface WalletTransferAddRequest {
  account_id?: number | string;
  to_account_id?: number | string;
  fund_type?: AccountTypeMap;
  amount?: number;
  transfer_type?: string;
  transfer_try_best?: number;
  external_bill_no?: string;
  memo?: string;
}

