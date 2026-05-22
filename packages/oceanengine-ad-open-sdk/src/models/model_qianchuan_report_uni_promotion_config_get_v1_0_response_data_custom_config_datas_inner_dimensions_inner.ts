// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_report_uni_promotion_config_get_v1_0_response_data_custom_config_datas_inner_dimensions_inner.go
// Do not edit manually.

import type { QianchuanReportUniPromotionConfigGetV10ResponseDataCustomConfigDatasInnerDimensionsInnerFilterConfig } from "../models/index";

export interface QianchuanReportUniPromotionConfigGetV10ResponseDataCustomConfigDatasInnerDimensionsInner {
  description?: string;
  exclusion_dims?: string[];
  exclusion_metrics?: string[];
  field?: string;
  filter_config?: QianchuanReportUniPromotionConfigGetV10ResponseDataCustomConfigDatasInnerDimensionsInnerFilterConfig;
  filter_only?: boolean;
  filterable?: boolean;
  is_required?: boolean;
  name?: string;
  sortable?: boolean;
}

