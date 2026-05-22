// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { Result, TaskStatus } from "../models";

export interface TaskListStruct {
  task_id?: number | string;
  task_name?: string;
  status?: TaskStatus;
  created_time?: number;
  result?: Result;
}

