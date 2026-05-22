// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_async_tasks_add_request.go
// Do not edit manually.

import type { ApiTaskSpec } from "../v3/index";

export interface AsyncTasksAddRequest {
  account_id?: number | string;
  task_name?: string;
  task_type?: string;
  task_spec?: ApiTaskSpec;
}

