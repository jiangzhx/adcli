// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { TaskResultStatus, TaskScope, TaskStatus } from "../models";

export interface AsyncRequestTaskListStruct {
  task_id?: number | string;
  task_name?: string;
  task_type?: string;
  task_scope?: TaskScope;
  status?: TaskStatus;
  result_status?: TaskResultStatus;
  created_time?: number;
  end_time?: number;
  scope_object_id_list?: number[];
  scope_object_id_str_list?: string[];
}

