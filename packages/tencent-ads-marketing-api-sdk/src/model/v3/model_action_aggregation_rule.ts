// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_action_aggregation_rule.go
// Do not edit manually.

import type { ActionType, AggregationMatcherGroup, MiniParamMatcherGroup } from "../v3/index";

export interface ActionAggregationRule {
  action_type?: ActionType;
  custom_action?: string;
  aggregation_group?: AggregationMatcherGroup[];
  filter_group?: MiniParamMatcherGroup[];
}

