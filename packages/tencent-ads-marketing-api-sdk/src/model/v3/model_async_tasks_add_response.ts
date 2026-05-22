// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_async_tasks_add_response.go
// Do not edit manually.

import type { ApiErrorStruct, AsyncTasksAddResponseData } from "../v3/index";

export interface AsyncTasksAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: AsyncTasksAddResponseData;
}

