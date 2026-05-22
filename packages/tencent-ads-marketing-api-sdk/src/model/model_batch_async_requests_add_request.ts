// Generated from tencentad/marketing-api-go-sdk pkg/model/model_batch_async_requests_add_request.go
// Do not edit manually.

import type { BatchAsyncRequestTaskSpec, TaskType } from "../model/index";

export interface BatchAsyncRequestsAddRequest {
  account_id?: number | string;
  task_name?: string;
  task_type?: TaskType;
  task_spec?: BatchAsyncRequestTaskSpec;
}

