// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_batch_async_request_specification_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, BatchAsyncRequestSpecificationGetResponseData } from "../v3/index";

export interface BatchAsyncRequestSpecificationGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: BatchAsyncRequestSpecificationGetResponseData;
}

