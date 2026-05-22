import type { DynamicCreativeInfo } from "../v3/index";
export interface CreativeRecommendGetRequest {
    account_id?: number | string;
    dynamic_creative_list?: DynamicCreativeInfo[];
}
