// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_merge_fund_type_fund_statements_detailed_get_list_struct.go
// Do not edit manually.

import type { AccountTypeMap, TradeTypeExt } from "../v3/index";

export interface MergeFundTypeFundStatementsDetailedGetListStruct {
  account_id?: number | string;
  fund_type?: AccountTypeMap;
  balance?: number;
  time?: number;
  external_bill_no?: string;
  trade_type_ext?: TradeTypeExt;
  amount?: number;
  description?: string;
}

