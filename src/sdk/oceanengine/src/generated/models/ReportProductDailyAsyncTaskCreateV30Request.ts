// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { ReportProductDailyAsyncTaskCreateV30RequestFiltering } from "../models";

export interface ReportProductDailyAsyncTaskCreateV30Request {
  advertiser_id: number;
  end_date: string;
  fields?: string[];
  filtering?: ReportProductDailyAsyncTaskCreateV30RequestFiltering;
  product_platform_id: number;
  start_date: string;
  task_name: string;
}

