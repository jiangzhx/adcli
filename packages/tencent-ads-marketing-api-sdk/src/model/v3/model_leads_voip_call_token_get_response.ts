// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_leads_voip_call_token_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, LeadsVoipCallTokenGetResponseData } from "../v3/index";

export interface LeadsVoipCallTokenGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: LeadsVoipCallTokenGetResponseData;
}

