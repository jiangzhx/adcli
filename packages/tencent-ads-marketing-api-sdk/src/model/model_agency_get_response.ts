// Generated from tencentad/marketing-api-go-sdk pkg/model/model_agency_get_response.go
// Do not edit manually.

import type { AgencyGetResponseData, ApiErrorStruct } from "../model/index";

export interface AgencyGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: AgencyGetResponseData;
}

