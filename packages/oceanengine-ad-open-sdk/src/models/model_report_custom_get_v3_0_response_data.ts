// 由 oceanengine/ad_open_sdk_go models/model_report_custom_get_v3_0_response_data.go 生成
// 不要手动编辑。

import type { ReportCustomGetV30ResponseDataPageInfo, ReportCustomGetV30ResponseDataRowsInner } from "../models/index";

export interface ReportCustomGetV30ResponseData {
  page_info?: ReportCustomGetV30ResponseDataPageInfo;
  rows: ReportCustomGetV30ResponseDataRowsInner[];
  total_metrics: Record<string, string>;
}

