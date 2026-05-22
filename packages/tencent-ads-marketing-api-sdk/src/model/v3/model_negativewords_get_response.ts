// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_negativewords_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, NegativewordsGetResponseData } from "../v3/index";

export interface NegativewordsGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: NegativewordsGetResponseData;
}

