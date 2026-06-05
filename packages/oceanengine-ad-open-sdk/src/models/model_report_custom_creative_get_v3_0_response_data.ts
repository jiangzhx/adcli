// 由 oceanengine/ad_open_sdk_go models/model_report_custom_creative_get_v3_0_response_data.go 生成
// 不要手动编辑。

import type { ReportCustomCreativeGetV30ResponseDataPageInfo, ReportCustomCreativeGetV30ResponseDataRowsInner } from "../models/index";

export interface ReportCustomCreativeGetV30ResponseData {
  page_info?: ReportCustomCreativeGetV30ResponseDataPageInfo;
  rows: ReportCustomCreativeGetV30ResponseDataRowsInner[];
  total_metrics: Record<string, string>;
}

