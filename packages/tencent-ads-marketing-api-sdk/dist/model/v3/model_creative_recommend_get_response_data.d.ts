import type { CreativeSuggestActionItem, SuggestActionItem } from "../v3/index";
export interface CreativeRecommendGetResponseData {
    coverage?: number;
    creative_suggest_action_list?: CreativeSuggestActionItem[];
    common_suggest_action_list?: SuggestActionItem[];
}
