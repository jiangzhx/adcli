// Generated from tencentad/marketing-api-go-sdk pkg/model/model_action_aggregation_rule.go
// Do not edit manually.

import type { ActionType, AggregationMatcherGroup, MiniParamMatcherGroup } from "../model/index";

export interface ActionAggregationRule {
  action_type?: ActionType;
  custom_action?: string;
  aggregation_group?: AggregationMatcherGroup[];
  filter_group?: MiniParamMatcherGroup[];
}

