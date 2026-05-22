// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_creative_recommend_get_response_data.go
// Do not edit manually.

import type { CreativeSuggestActionItem, SuggestActionItem } from "../v3/index";

export interface CreativeRecommendGetResponseData {
  coverage?: number;
  creative_suggest_action_list?: CreativeSuggestActionItem[];
  common_suggest_action_list?: SuggestActionItem[];
}

