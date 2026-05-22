// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_leads_invalid_pay_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, LeadsInvalidPayGetResponseData } from "../v3/index";

export interface LeadsInvalidPayGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: LeadsInvalidPayGetResponseData;
}

