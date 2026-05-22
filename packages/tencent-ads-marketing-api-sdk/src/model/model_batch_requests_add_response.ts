// Generated from tencentad/marketing-api-go-sdk pkg/model/model_batch_requests_add_response.go
// Do not edit manually.

import type { ApiErrorStruct, BatchRequestsAddResponseData } from "../model/index";

export interface BatchRequestsAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: BatchRequestsAddResponseData;
}

