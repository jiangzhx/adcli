// Generated from tencentad/marketing-api-go-sdk pkg/model/model_leads_invalid_pay_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, LeadsInvalidPayGetResponseData } from "../model/index";

export interface LeadsInvalidPayGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: LeadsInvalidPayGetResponseData;
}

