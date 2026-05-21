// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { ReportCustomConfigGetV30ResponseDataListInnerDimensionsInnerFilterConfig } from "../models";

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

