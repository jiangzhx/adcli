// Generated from tencentad/marketing-api-go-sdk pkg/model/model_hourly_reports_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, HourlyReportsGetResponseData } from "../model/index";

export interface HourlyReportsGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: HourlyReportsGetResponseData;
}

