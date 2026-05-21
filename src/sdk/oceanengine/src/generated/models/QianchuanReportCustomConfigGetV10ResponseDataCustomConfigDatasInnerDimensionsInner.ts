// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { QianchuanReportCustomConfigGetV10ResponseDataCustomConfigDatasInnerDimensionsInnerFilterConfig } from "../models";

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

