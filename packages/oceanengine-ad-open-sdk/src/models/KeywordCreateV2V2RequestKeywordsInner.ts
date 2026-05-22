// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { KeywordCreateV2V2KeywordsBidType, KeywordCreateV2V2KeywordsMatchType } from "../models";

export interface KeywordCreateV2V2RequestKeywordsInner {
  bid?: number;
  bid_type?: KeywordCreateV2V2KeywordsBidType;
  match_type: KeywordCreateV2V2KeywordsMatchType;
  word: string;
}

