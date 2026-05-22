import type { ActionType, AggregationMatcherGroup, MiniParamMatcherGroup } from "../models";
export interface ActionAggregationRule {
    action_type?: ActionType;
    custom_action?: string;
    aggregation_group?: AggregationMatcherGroup[];
    filter_group?: MiniParamMatcherGroup[];
}
