// Generated from tencentad/marketing-api-go-sdk pkg/model/model_fund_statements_detailed_get_list_struct.go
// Do not edit manually.

import type { AccountTypeMap, TradeTypeExt } from "../model/index";

export interface FundStatementsDetailedGetListStruct {
  account_id?: number | string;
  balance?: number;
  time?: number;
  external_bill_no?: string;
  trade_type_ext?: TradeTypeExt;
  amount?: number;
  description?: string;
  fund_type?: AccountTypeMap;
}

