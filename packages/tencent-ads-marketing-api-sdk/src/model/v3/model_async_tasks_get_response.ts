// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_async_tasks_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, AsyncTasksGetResponseData } from "../v3/index";

export interface AsyncTasksGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: AsyncTasksGetResponseData;
}

