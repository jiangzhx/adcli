import type { TargetingAdvancedRecommendType } from "../models";
export interface TargetingTagsGetQuerySpec {
    query?: string;
    query_list?: string[];
    max_result_number?: number;
    excluding_targeting_tags?: string[];
    advanced_recommend_type?: TargetingAdvancedRecommendType;
}
