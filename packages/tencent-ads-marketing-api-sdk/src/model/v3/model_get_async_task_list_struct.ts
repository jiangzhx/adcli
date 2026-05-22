// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_get_async_task_list_struct.go
// Do not edit manually.

import type { GetAsyncTaskResult, TaskStatus } from "../v3/index";

export interface GetAsyncTaskListStruct {
  task_id?: number | string;
  task_name?: string;
  task_type?: string;
  status?: TaskStatus;
  created_time?: number;
  result?: GetAsyncTaskResult;
}

