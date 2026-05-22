// Generated from tencentad/marketing-api-go-sdk pkg/model/model_summary.go
// Do not edit manually.

import type { TaskResultStatus, TaskScope, TaskStatus, TaskType } from "../model/index";

export interface Summary {
  task_id?: number | string;
  task_name?: string;
  task_type?: TaskType;
  task_scope?: TaskScope;
  status?: TaskStatus;
  result_status?: TaskResultStatus;
  created_time?: number;
  end_time?: number;
  success_count?: number;
  fail_count?: number;
  system_error_count?: number;
  progress?: number;
}

