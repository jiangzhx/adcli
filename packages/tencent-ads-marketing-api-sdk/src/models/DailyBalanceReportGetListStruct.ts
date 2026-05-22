// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { AccountTypeMap } from "../models";

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
  preauth_out_pay?: number;
  preauth_in_refund?: number;
  acct_out_pay?: number;
  acct_out_pay_share?: number;
  share_out_pay?: number;
}

