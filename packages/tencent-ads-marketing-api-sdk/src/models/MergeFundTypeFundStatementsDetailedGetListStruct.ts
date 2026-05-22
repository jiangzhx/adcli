// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { AccountTypeMap, TradeTypeExt } from "../models";

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

