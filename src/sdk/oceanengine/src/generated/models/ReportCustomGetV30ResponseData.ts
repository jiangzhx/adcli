// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { ReportCustomGetV30ResponseDataPageInfo, ReportCustomGetV30ResponseDataRowsInner } from "../models";

export interface ReportCustomGetV30ResponseData {
  page_info?: ReportCustomGetV30ResponseDataPageInfo;
  rows: ReportCustomGetV30ResponseDataRowsInner[];
  total_metrics: Record<string, string>;
}

