// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { PromotionCreateV30KeywordsBidType, PromotionCreateV30KeywordsMatchType } from "../models";

export interface PromotionCreateV30RequestKeywordsInner {
  bid?: number;
  bid_type?: PromotionCreateV30KeywordsBidType;
  match_type: PromotionCreateV30KeywordsMatchType;
  word: string;
}

