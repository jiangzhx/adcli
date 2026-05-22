// Generated from oceanengine/ad_open_sdk_go models/model_keyword_create_v2_v2_request_keywords_inner.go
// Do not edit manually.

import type { KeywordCreateV2V2KeywordsBidType, KeywordCreateV2V2KeywordsMatchType } from "../models/index";

export interface KeywordCreateV2V2RequestKeywordsInner {
  bid?: number;
  bid_type?: KeywordCreateV2V2KeywordsBidType;
  match_type: KeywordCreateV2V2KeywordsMatchType;
  word: string;
}

