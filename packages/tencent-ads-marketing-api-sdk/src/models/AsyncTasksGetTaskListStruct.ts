// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { AsyncTasksGetResult, TaskStatus, TaskType } from "../models";

export interface AsyncTasksGetTaskListStruct {
  task_id?: number | string;
  task_name?: string;
  task_type?: TaskType;
  status?: TaskStatus;
  created_time?: number;
  result?: AsyncTasksGetResult;
}

