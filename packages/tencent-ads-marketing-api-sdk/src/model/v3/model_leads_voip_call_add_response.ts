// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_leads_voip_call_add_response.go
// Do not edit manually.

import type { ApiErrorStruct, LeadsVoipCallAddResponseData } from "../v3/index";

export interface LeadsVoipCallAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: LeadsVoipCallAddResponseData;
}

