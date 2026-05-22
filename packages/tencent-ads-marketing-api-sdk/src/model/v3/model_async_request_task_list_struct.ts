// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_async_request_task_list_struct.go
// Do not edit manually.

import type { TaskResultStatus, TaskScope, TaskStatus } from "../v3/index";

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

