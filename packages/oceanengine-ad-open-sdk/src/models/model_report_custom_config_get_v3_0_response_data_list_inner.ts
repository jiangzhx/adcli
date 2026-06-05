// 由 oceanengine/ad_open_sdk_go models/model_report_custom_config_get_v3_0_response_data_list_inner.go 生成
// 不要手动编辑。

import type { ReportCustomConfigGetV30DataListDataTopic, ReportCustomConfigGetV30ResponseDataListInnerDimensionsInner, ReportCustomConfigGetV30ResponseDataListInnerMetricsInner } from "../models/index";

export interface ReportCustomConfigGetV30ResponseDataListInner {
  data_topic?: ReportCustomConfigGetV30DataListDataTopic;
  dimensions?: ReportCustomConfigGetV30ResponseDataListInnerDimensionsInner[];
  metrics?: ReportCustomConfigGetV30ResponseDataListInnerMetricsInner[];
}

