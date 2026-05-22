// Generated from oceanengine/ad_open_sdk_go models/model_report_custom_async_task_create_v3_0_request.go
// Do not edit manually.

import type { ReportCustomAsyncTaskCreateV30DataTopic, ReportCustomAsyncTaskCreateV30RequestFiltersInner, ReportCustomAsyncTaskCreateV30RequestOrderByInner } from "../models/index";

export interface ReportCustomAsyncTaskCreateV30Request {
  advertiser_id: number | string;
  data_topic: ReportCustomAsyncTaskCreateV30DataTopic;
  dimensions: string[];
  end_time: string;
  filters: ReportCustomAsyncTaskCreateV30RequestFiltersInner[];
  force?: boolean;
  metrics: string[];
  order_by: ReportCustomAsyncTaskCreateV30RequestOrderByInner[];
  page?: number;
  page_size?: number;
  start_time: string;
  task_name: string;
}

