// Generated from oceanengine/ad_open_sdk_go models/model_keyword_create_v3_0_request_keywords_inner.go
// Do not edit manually.

import type { KeywordCreateV30KeywordsBidType, KeywordCreateV30KeywordsMatchType } from "../models/index";

export interface KeywordCreateV30RequestKeywordsInner {
  bid?: number;
  bid_type?: KeywordCreateV30KeywordsBidType;
  match_type: KeywordCreateV30KeywordsMatchType;
  word: string;
}

