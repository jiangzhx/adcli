// Generated from tencentad/marketing-api-go-sdk pkg/model/model_fund_transfer_add_response.go
// Do not edit manually.

import type { ApiErrorStruct, FundTransferAddResponseData } from "../model/index";

export interface FundTransferAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: FundTransferAddResponseData;
}

