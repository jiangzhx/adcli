// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_report_custom_config_get_v1_0_response_data_custom_config_datas_inner_dimensions_inner.go
// Do not edit manually.

import type { QianchuanReportCustomConfigGetV10ResponseDataCustomConfigDatasInnerDimensionsInnerFilterConfig } from "../models/index";

export interface QianchuanReportCustomConfigGetV10ResponseDataCustomConfigDatasInnerDimensionsInner {
  description?: string;
  exclusion_dims?: string[];
  exclusion_metrics?: string[];
  field?: string;
  filter_config?: QianchuanReportCustomConfigGetV10ResponseDataCustomConfigDatasInnerDimensionsInnerFilterConfig;
  filterable?: boolean;
  is_required?: boolean;
  name?: string;
  sortable?: boolean;
}

