// Generated from oceanengine/ad_open_sdk_go models/model_async_task_create_v2_request.go
// Do not edit manually.

import type { AsyncTaskCreateV2RequestTaskParams, AsyncTaskCreateV2TaskType } from "../models/index";

export interface AsyncTaskCreateV2Request {
  advertiser_id: number | string;
  force?: boolean;
  task_name: string;
  task_params: AsyncTaskCreateV2RequestTaskParams;
  task_type: AsyncTaskCreateV2TaskType;
}

