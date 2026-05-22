import type { AggregationType, Comparator, CountType } from "../model/index";
export interface AggregationMatcher {
    aggregation_type?: AggregationType;
    count_type?: CountType;
    param_name?: string;
    comparator?: Comparator;
    comparison_value?: number;
    comparison_min_value?: number;
    comparison_max_value?: number;
}
