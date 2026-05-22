// Generated from oceanengine/ad_open_sdk_go models/model_async_task_create_v2_request_task_params.go
// Do not edit manually.

import type { AsyncTaskCreateV2RequestTaskParamsFiltering, AsyncTaskCreateV2TaskParamsOrderType } from "../models/index";

export interface AsyncTaskCreateV2RequestTaskParams {
  end_date: string;
  fields?: string[];
  filtering?: AsyncTaskCreateV2RequestTaskParamsFiltering;
  group_by: string[];
  order_field?: string;
  order_type?: AsyncTaskCreateV2TaskParamsOrderType;
  start_date: string;
}

