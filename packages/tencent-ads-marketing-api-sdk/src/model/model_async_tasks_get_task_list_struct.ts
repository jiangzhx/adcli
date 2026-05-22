// Generated from tencentad/marketing-api-go-sdk pkg/model/model_async_tasks_get_task_list_struct.go
// Do not edit manually.

import type { AsyncTasksGetResult, TaskStatus, TaskType } from "../model/index";

export interface AsyncTasksGetTaskListStruct {
  task_id?: number | string;
  task_name?: string;
  task_type?: TaskType;
  status?: TaskStatus;
  created_time?: number;
  result?: AsyncTasksGetResult;
}

