// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_aggregation_matcher.go
// Do not edit manually.

import type { AggregationType, Comparator, CountType } from "../v3/index";

export interface AggregationMatcher {
  aggregation_type?: AggregationType;
  count_type?: CountType;
  param_name?: string;
  comparator?: Comparator;
  comparison_value?: number;
  comparison_min_value?: number;
  comparison_max_value?: number;
}

