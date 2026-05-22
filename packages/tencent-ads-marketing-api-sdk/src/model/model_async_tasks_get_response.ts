// Generated from tencentad/marketing-api-go-sdk pkg/model/model_async_tasks_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, AsyncTasksGetResponseData } from "../model/index";

export interface AsyncTasksGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: AsyncTasksGetResponseData;
}

