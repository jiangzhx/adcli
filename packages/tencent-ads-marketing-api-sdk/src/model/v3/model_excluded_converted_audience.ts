// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_excluded_converted_audience.go
// Do not edit manually.

import type { ExcludedDay, ExcludedDimension } from "../v3/index";

export interface ExcludedConvertedAudience {
  excluded_dimension?: ExcludedDimension;
  conversion_behavior_list?: string[];
  excluded_day?: ExcludedDay;
}

