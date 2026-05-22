// Generated from tencentad/marketing-api-go-sdk pkg/model/model_leads_call_token_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, LeadsCallTokenGetResponseData } from "../model/index";

export interface LeadsCallTokenGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: LeadsCallTokenGetResponseData;
}

