// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_leads_add_response.go
// Do not edit manually.

import type { ApiErrorStruct, LeadsAddResponseData } from "../v3/index";

export interface LeadsAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: LeadsAddResponseData;
}

