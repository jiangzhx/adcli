// Generated from tencentad/marketing-api-go-sdk pkg/model/model_massive_keyword_recommend_data_info.go
// Do not edit manually.

import type { ContainsRegionWords, FilterPurchasedWords } from "../model/index";

export interface MassiveKeywordRecommendDataInfo {
  seed_words?: string[];
  is_filter_purchased_words?: FilterPurchasedWords;
  site_sets?: string[];
  exclude_words?: string[];
  contains_non_regional_words?: ContainsRegionWords;
  word_province?: number[];
  word_city?: number[];
}

