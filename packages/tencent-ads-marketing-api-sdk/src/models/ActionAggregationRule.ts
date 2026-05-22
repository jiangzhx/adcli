// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { ActionType, AggregationMatcherGroup, MiniParamMatcherGroup } from "../models";

export interface ActionAggregationRule {
  action_type?: ActionType;
  custom_action?: string;
  aggregation_group?: AggregationMatcherGroup[];
  filter_group?: MiniParamMatcherGroup[];
}

