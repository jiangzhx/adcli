// Generated from tencentad/marketing-api-go-sdk pkg/model/model_fund_transfer_add_response_data.go
// Do not edit manually.

import type { AccountTypeMap } from "../model/index";

export interface FundTransferAddResponseData {
  amount?: number;
  external_bill_no?: string;
  fund_type?: AccountTypeMap;
  time?: number;
  is_repeated?: boolean;
}

