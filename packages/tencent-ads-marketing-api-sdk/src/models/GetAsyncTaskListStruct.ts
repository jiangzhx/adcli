// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { GetAsyncTaskResult, TaskStatus } from "../models";

export interface GetAsyncTaskListStruct {
  task_id?: number | string;
  task_name?: string;
  task_type?: string;
  status?: TaskStatus;
  created_time?: number;
  result?: GetAsyncTaskResult;
}

