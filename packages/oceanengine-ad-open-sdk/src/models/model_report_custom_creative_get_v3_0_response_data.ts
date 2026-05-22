// Generated from oceanengine/ad_open_sdk_go models/model_report_custom_creative_get_v3_0_response_data.go
// Do not edit manually.

import type { ReportCustomCreativeGetV30ResponseDataPageInfo, ReportCustomCreativeGetV30ResponseDataRowsInner } from "../models/index";

export interface ReportCustomCreativeGetV30ResponseData {
  page_info?: ReportCustomCreativeGetV30ResponseDataPageInfo;
  rows: ReportCustomCreativeGetV30ResponseDataRowsInner[];
  total_metrics: Record<string, string>;
}

