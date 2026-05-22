// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_async_reports_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, AsyncReportsGetResponseData } from "../v3/index";

export interface AsyncReportsGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: AsyncReportsGetResponseData;
}

