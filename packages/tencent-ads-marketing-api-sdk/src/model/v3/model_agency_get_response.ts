// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_agency_get_response.go
// Do not edit manually.

import type { AgencyGetResponseData, ApiErrorStruct } from "../v3/index";

export interface AgencyGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: AgencyGetResponseData;
}

