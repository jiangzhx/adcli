// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ReportProductDailyAsyncTaskCreateV30RequestFiltering } from "../models";

export interface ReportProductDailyAsyncTaskCreateV30Request {
  advertiser_id: number | string;
  end_date: string;
  fields?: string[];
  filtering?: ReportProductDailyAsyncTaskCreateV30RequestFiltering;
  product_platform_id: number | string;
  start_date: string;
  task_name: string;
}

