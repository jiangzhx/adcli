import type { OrderByStructInfo, RecommendCategory } from "../model/index";
export interface KeywordRecommendGetRequest {
    site_sets?: string[];
    recommend_category?: RecommendCategory;
    account_id?: number | string;
    system_industry_id?: number | string;
    query_word?: string[];
    business_point_id?: string;
    adgroup_id?: number | string;
    campaign_id?: number | string;
    include_word?: string[];
    exclude_word?: string[];
    filter_ad_word?: boolean;
    filter_account_word?: boolean;
    recommend_reasons?: string[];
    province?: number[];
    city?: number[];
    order_by?: OrderByStructInfo[];
}
