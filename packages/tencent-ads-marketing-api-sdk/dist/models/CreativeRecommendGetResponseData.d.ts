import type { CreativeSuggestActionItem, SuggestActionItem } from "../models";
export interface CreativeRecommendGetResponseData {
    coverage?: number;
    creative_suggest_action_list?: CreativeSuggestActionItem[];
    common_suggest_action_list?: SuggestActionItem[];
}
