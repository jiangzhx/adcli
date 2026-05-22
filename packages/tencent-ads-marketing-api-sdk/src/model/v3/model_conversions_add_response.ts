// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_conversions_add_response.go
// Do not edit manually.

import type { ApiErrorStruct, ConversionsAddResponseData } from "../v3/index";

export interface ConversionsAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: ConversionsAddResponseData;
}

