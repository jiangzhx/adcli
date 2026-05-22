// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { ReportProductHourlyAsyncTaskCreateV30RequestFiltering } from "../models";

export interface ReportProductHourlyAsyncTaskCreateV30Request {
  advertiser_id: number;
  end_date: string;
  fields?: string[];
  filtering?: ReportProductHourlyAsyncTaskCreateV30RequestFiltering;
  product_platform_id: number;
  start_date: string;
  task_name: string;
}

