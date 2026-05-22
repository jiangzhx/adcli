// Generated from oceanengine/ad_open_sdk_go models/model_promotion_create_v3_0_request_keywords_inner.go
// Do not edit manually.

import type { PromotionCreateV30KeywordsBidType, PromotionCreateV30KeywordsMatchType } from "../models/index";

export interface PromotionCreateV30RequestKeywordsInner {
  bid?: number;
  bid_type?: PromotionCreateV30KeywordsBidType;
  match_type: PromotionCreateV30KeywordsMatchType;
  word: string;
}

