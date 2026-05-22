// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanReportUniPromotionConfigGetV10ResponseDataCustomConfigDatasInnerDimensionsInnerFilterConfig } from "../models";

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

