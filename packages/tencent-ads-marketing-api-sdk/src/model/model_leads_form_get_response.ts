// Generated from tencentad/marketing-api-go-sdk pkg/model/model_leads_form_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, LeadsFormGetResponseData } from "../model/index";

export interface LeadsFormGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: LeadsFormGetResponseData;
}

