// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_async_reports_add_response.go
// Do not edit manually.

import type { ApiErrorStruct, AsyncReportsAddResponseData } from "../v3/index";

export interface AsyncReportsAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: AsyncReportsAddResponseData;
}

