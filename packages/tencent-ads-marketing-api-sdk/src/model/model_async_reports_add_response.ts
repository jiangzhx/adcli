// Generated from tencentad/marketing-api-go-sdk pkg/model/model_async_reports_add_response.go
// Do not edit manually.

import type { ApiErrorStruct, AsyncReportsAddResponseData } from "../model/index";

export interface AsyncReportsAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: AsyncReportsAddResponseData;
}

