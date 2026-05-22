// Generated from tencentad/marketing-api-go-sdk pkg/model/model_leads_form_add_response.go
// Do not edit manually.

import type { ApiErrorStruct, LeadsFormAddResponseData } from "../model/index";

export interface LeadsFormAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: LeadsFormAddResponseData;
}

