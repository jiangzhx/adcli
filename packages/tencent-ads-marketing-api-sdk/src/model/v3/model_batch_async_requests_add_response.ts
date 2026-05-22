// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_batch_async_requests_add_response.go
// Do not edit manually.

import type { ApiErrorStruct, BatchAsyncRequestsAddResponseData } from "../v3/index";

export interface BatchAsyncRequestsAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: BatchAsyncRequestsAddResponseData;
}

