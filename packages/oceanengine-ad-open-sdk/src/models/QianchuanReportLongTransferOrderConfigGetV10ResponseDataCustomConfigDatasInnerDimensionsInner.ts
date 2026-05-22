// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanReportLongTransferOrderConfigGetV10ResponseDataCustomConfigDatasInnerDimensionsInnerFilterConfig } from "../models";

export interface QianchuanReportLongTransferOrderConfigGetV10ResponseDataCustomConfigDatasInnerDimensionsInner {
  description?: string;
  exclusion_dims?: string[];
  exclusion_metrics?: string[];
  field?: string;
  filter_config?: QianchuanReportLongTransferOrderConfigGetV10ResponseDataCustomConfigDatasInnerDimensionsInnerFilterConfig;
  filterable?: boolean;
  is_required?: boolean;
  name?: string;
  sortable?: boolean;
}

