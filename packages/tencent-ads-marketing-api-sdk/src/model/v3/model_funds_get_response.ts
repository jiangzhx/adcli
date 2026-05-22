// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_funds_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, FundsGetResponseData } from "../v3/index";

export interface FundsGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: FundsGetResponseData;
}

