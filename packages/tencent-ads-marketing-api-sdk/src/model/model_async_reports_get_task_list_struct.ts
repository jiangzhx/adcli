// Generated from tencentad/marketing-api-go-sdk pkg/model/model_async_reports_get_task_list_struct.go
// Do not edit manually.

import type { AsyncReportsGetResult, TaskStatus } from "../model/index";

export interface AsyncReportsGetTaskListStruct {
  task_id?: number | string;
  task_name?: string;
  status?: TaskStatus;
  created_time?: number;
  result?: AsyncReportsGetResult;
}

