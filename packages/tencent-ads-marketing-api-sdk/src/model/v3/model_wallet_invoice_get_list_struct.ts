// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_wallet_invoice_get_list_struct.go
// Do not edit manually.

import type { AccountTypeMap, TradeTypeExt } from "../v3/index";

export interface WalletInvoiceGetListStruct {
  account_id?: number | string;
  account_name?: string;
  fund_type?: AccountTypeMap;
  time?: number;
  external_bill_no?: string;
  trade_type_ext?: TradeTypeExt;
  amount?: number;
  description?: string;
  primary_key?: string;
}

