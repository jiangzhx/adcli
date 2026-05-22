// Generated from tencentad/marketing-api-go-sdk pkg/model/model_batch_async_requests_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, BatchAsyncRequestsGetResponseData } from "../model/index";

export interface BatchAsyncRequestsGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: BatchAsyncRequestsGetResponseData;
}

