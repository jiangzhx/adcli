// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_leads_list_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, LeadsListGetResponseData } from "../v3/index";

export interface LeadsListGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: LeadsListGetResponseData;
}

