// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { KeywordCreateV30KeywordsBidType, KeywordCreateV30KeywordsMatchType } from "../models";

export interface KeywordCreateV30RequestKeywordsInner {
  bid?: number;
  bid_type?: KeywordCreateV30KeywordsBidType;
  match_type: KeywordCreateV30KeywordsMatchType;
  word: string;
}

