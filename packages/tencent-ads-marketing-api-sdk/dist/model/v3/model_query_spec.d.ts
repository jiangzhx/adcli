import type { TargetingAdvancedRecommendType } from "../v3/index";
export interface QuerySpec {
    query?: string;
    query_list?: string[];
    max_result_number?: number;
    excluding_targeting_tags?: string[];
    advanced_recommend_type?: TargetingAdvancedRecommendType;
}
