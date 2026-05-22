// Generated from oceanengine/ad_open_sdk_go models/model_report_product_hourly_async_task_create_v3_0_request.go
// Do not edit manually.

import type { ReportProductHourlyAsyncTaskCreateV30RequestFiltering } from "../models/index";

export interface ReportProductHourlyAsyncTaskCreateV30Request {
  advertiser_id: number | string;
  end_date: string;
  fields?: string[];
  filtering?: ReportProductHourlyAsyncTaskCreateV30RequestFiltering;
  product_platform_id: number | string;
  start_date: string;
  task_name: string;
}

