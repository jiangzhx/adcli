// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { KeywordUpdateV30KeywordsBidType, KeywordUpdateV30KeywordsMatchType } from "../models";

export interface KeywordUpdateV30RequestKeywordsInner {
  bid?: number;
  bid_type?: KeywordUpdateV30KeywordsBidType;
  is_pause?: number;
  keyword_id?: number | string;
  match_type?: KeywordUpdateV30KeywordsMatchType;
  word_id?: number | string;
}

