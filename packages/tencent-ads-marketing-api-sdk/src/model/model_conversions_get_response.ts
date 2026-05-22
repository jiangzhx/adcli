// Generated from tencentad/marketing-api-go-sdk pkg/model/model_conversions_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, ConversionsGetResponseData } from "../model/index";

export interface ConversionsGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: ConversionsGetResponseData;
}

