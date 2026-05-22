// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_fund_transfer_add_response_data.go
// Do not edit manually.

import type { AccountTypeMap, CheckResult } from "../v3/index";

export interface FundTransferAddResponseData {
  fund_type?: AccountTypeMap;
  amount?: number;
  external_bill_no?: string;
  time?: number;
  is_repeated?: boolean;
  recommend_amount?: number;
  check_result?: CheckResult;
}

