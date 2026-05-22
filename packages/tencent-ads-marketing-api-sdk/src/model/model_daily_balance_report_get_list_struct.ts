// Generated from tencentad/marketing-api-go-sdk pkg/model/model_daily_balance_report_get_list_struct.go
// Do not edit manually.

import type { AccountTypeMap } from "../model/index";

export interface DailyBalanceReportGetListStruct {
  account_id?: number | string;
  fund_type?: AccountTypeMap;
  time?: number;
  deposit?: number;
  paid?: number;
  trans_in?: number;
  trans_out?: number;
  credit_modify?: number;
  balance?: number;
  preauth_balance?: number;
}

