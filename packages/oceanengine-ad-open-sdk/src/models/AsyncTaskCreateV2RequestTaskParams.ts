// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { AsyncTaskCreateV2RequestTaskParamsFiltering, AsyncTaskCreateV2TaskParamsOrderType } from "../models";

export interface AsyncTaskCreateV2RequestTaskParams {
  end_date: string;
  fields?: string[];
  filtering?: AsyncTaskCreateV2RequestTaskParamsFiltering;
  group_by: string[];
  order_field?: string;
  order_type?: AsyncTaskCreateV2TaskParamsOrderType;
  start_date: string;
}

