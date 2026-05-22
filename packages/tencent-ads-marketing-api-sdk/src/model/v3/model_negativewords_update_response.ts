// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_negativewords_update_response.go
// Do not edit manually.

import type { ApiErrorStruct, NegativewordsUpdateResponseData } from "../v3/index";

export interface NegativewordsUpdateResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: NegativewordsUpdateResponseData;
}

