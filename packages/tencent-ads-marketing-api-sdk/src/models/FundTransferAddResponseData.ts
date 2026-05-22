// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { AccountTypeMap, CheckResult } from "../models";

export interface FundTransferAddResponseData {
  fund_type?: AccountTypeMap;
  amount?: number;
  external_bill_no?: string;
  time?: number;
  is_repeated?: boolean;
  recommend_amount?: number;
  check_result?: CheckResult;
}

