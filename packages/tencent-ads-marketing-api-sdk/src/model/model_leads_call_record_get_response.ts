// Generated from tencentad/marketing-api-go-sdk pkg/model/model_leads_call_record_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, LeadsCallRecordGetResponseData } from "../model/index";

export interface LeadsCallRecordGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: LeadsCallRecordGetResponseData;
}

