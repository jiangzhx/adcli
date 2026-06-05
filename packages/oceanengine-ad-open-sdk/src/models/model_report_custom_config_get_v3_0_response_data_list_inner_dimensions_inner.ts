// 由 oceanengine/ad_open_sdk_go models/model_report_custom_config_get_v3_0_response_data_list_inner_dimensions_inner.go 生成
// 不要手动编辑。

import type { ReportCustomConfigGetV30ResponseDataListInnerDimensionsInnerFilterConfig } from "../models/index";

export interface ReportCustomConfigGetV30ResponseDataListInnerDimensionsInner {
  description?: string;
  exclusion_dims?: string[];
  exclusion_metrics?: string[];
  field?: string;
  filter_able?: boolean;
  filter_config?: ReportCustomConfigGetV30ResponseDataListInnerDimensionsInnerFilterConfig;
  name?: string;
  sort_able?: boolean;
}

