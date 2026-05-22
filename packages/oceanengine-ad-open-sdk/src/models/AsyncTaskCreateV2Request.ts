// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { AsyncTaskCreateV2RequestTaskParams, AsyncTaskCreateV2TaskType } from "../models";

export interface AsyncTaskCreateV2Request {
  advertiser_id: number;
  force?: boolean;
  task_name: string;
  task_params: AsyncTaskCreateV2RequestTaskParams;
  task_type: AsyncTaskCreateV2TaskType;
}

