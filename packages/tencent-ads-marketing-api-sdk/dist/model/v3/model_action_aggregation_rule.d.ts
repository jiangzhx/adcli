import type { ActionType, AggregationMatcherGroup, MiniParamMatcherGroup } from "../v3/index";
export interface ActionAggregationRule {
    action_type?: ActionType;
    custom_action?: string;
    aggregation_group?: AggregationMatcherGroup[];
    filter_group?: MiniParamMatcherGroup[];
}
