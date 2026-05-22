// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_leads_update_response.go
// Do not edit manually.

import type { ApiErrorStruct, LeadsUpdateResponseData } from "../v3/index";

export interface LeadsUpdateResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: LeadsUpdateResponseData;
}

