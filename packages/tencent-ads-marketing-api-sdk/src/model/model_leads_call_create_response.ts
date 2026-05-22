// Generated from tencentad/marketing-api-go-sdk pkg/model/model_leads_call_create_response.go
// Do not edit manually.

import type { ApiErrorStruct, LeadsCallCreateResponseData } from "../model/index";

export interface LeadsCallCreateResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: LeadsCallCreateResponseData;
}

