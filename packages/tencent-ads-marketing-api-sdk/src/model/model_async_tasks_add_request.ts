// Generated from tencentad/marketing-api-go-sdk pkg/model/model_async_tasks_add_request.go
// Do not edit manually.

import type { TaskSpec, TaskType } from "../model/index";

export interface AsyncTasksAddRequest {
  account_id?: number | string;
  task_name?: string;
  task_type?: TaskType;
  task_spec?: TaskSpec;
  weixin_official_accounts_upgrade_enabled?: boolean;
}

