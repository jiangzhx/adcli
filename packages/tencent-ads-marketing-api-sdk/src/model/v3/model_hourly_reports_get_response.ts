// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_hourly_reports_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, HourlyReportsGetResponseData } from "../v3/index";

export interface HourlyReportsGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: HourlyReportsGetResponseData;
}

