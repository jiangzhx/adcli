// Generated from tencentad/marketing-api-go-sdk pkg/model/model_batch_async_requests_get_task_list_struct.go
// Do not edit manually.

import type { TaskResultStatus, TaskScope, TaskStatus, TaskType } from "../model/index";

export interface BatchAsyncRequestsGetTaskListStruct {
  task_id?: number | string;
  task_name?: string;
  task_type?: TaskType;
  task_scope?: TaskScope;
  status?: TaskStatus;
  result_status?: TaskResultStatus;
  created_time?: number;
  end_time?: number;
  scope_object_id_list?: number[];
  scope_object_id_str_list?: string[];
}

