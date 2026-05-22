// Generated from oceanengine/ad_open_sdk_go models/model_promotion_update_v3_0_request_keywords_inner.go
// Do not edit manually.

import type { PromotionUpdateV30KeywordsBidType, PromotionUpdateV30KeywordsMatchType } from "../models/index";

export interface PromotionUpdateV30RequestKeywordsInner {
  bid?: number;
  bid_type?: PromotionUpdateV30KeywordsBidType;
  match_type?: PromotionUpdateV30KeywordsMatchType;
  word: string;
}

