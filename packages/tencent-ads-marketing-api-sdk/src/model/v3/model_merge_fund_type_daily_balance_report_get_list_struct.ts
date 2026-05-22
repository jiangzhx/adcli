// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_merge_fund_type_daily_balance_report_get_list_struct.go
// Do not edit manually.

import type { AccountMergeTypeMap } from "../v3/index";

export interface MergeFundTypeDailyBalanceReportGetListStruct {
  account_id?: number | string;
  fund_type?: AccountMergeTypeMap;
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

