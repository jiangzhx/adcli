// Generated from tencentad/marketing-api-go-sdk pkg/model/model_async_reports_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, AsyncReportsGetResponseData } from "../model/index";

export interface AsyncReportsGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: AsyncReportsGetResponseData;
}

