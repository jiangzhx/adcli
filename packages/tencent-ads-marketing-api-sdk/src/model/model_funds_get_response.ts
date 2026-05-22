// Generated from tencentad/marketing-api-go-sdk pkg/model/model_funds_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, FundsGetResponseData } from "../model/index";

export interface FundsGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: FundsGetResponseData;
}

