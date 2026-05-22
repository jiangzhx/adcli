import type { DynamicCreativeInfo } from "../models";
export interface CreativeRecommendGetRequest {
    account_id?: number | string;
    dynamic_creative_list?: DynamicCreativeInfo[];
}
