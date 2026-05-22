// Generated from oceanengine/ad_open_sdk_go models/model_douplus_order_report_v3_0_filter.go
// Do not edit manually.

import type { DouplusOrderReportV30FilterOrderCreateTime } from "../models/index";

export interface DouplusOrderReportV30Filter {
  author_unique_ids?: string[];
  item_ids?: number | string[];
  order_create_time?: DouplusOrderReportV30FilterOrderCreateTime;
  order_ids?: number | string[];
  room_ids?: number | string[];
  task_ids?: number | string[];
}

