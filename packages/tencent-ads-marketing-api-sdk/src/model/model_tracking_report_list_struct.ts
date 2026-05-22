// Generated from tencentad/marketing-api-go-sdk pkg/model/model_tracking_report_list_struct.go
// Do not edit manually.

import type { SourceType } from "../model/index";

export interface TrackingReportListStruct {
  date?: string;
  hour?: number;
  raw_clicks?: number;
  "1min_clicks"?: number;
  "2min_clicks"?: number;
  "15min_clicks"?: number;
  request_fail?: number;
  response_fail?: number;
  http_status_error?: number;
  other_error?: number;
  source_type?: SourceType;
}

