// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_leads_status_update_response.go
// Do not edit manually.

import type { ApiErrorStruct, LeadsStatusUpdateResponseData } from "../v3/index";

export interface LeadsStatusUpdateResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: LeadsStatusUpdateResponseData;
}

