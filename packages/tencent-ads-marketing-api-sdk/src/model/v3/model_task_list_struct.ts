// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_task_list_struct.go
// Do not edit manually.

import type { Result, TaskStatus } from "../v3/index";

export interface TaskListStruct {
  task_id?: number | string;
  task_name?: string;
  status?: TaskStatus;
  created_time?: number;
  result?: Result;
}

