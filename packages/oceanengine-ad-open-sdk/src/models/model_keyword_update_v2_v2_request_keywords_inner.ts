// Generated from oceanengine/ad_open_sdk_go models/model_keyword_update_v2_v2_request_keywords_inner.go
// Do not edit manually.

import type { KeywordUpdateV2V2KeywordsBidType, KeywordUpdateV2V2KeywordsMatchType } from "../models/index";

export interface KeywordUpdateV2V2RequestKeywordsInner {
  bid?: number;
  bid_type?: KeywordUpdateV2V2KeywordsBidType;
  is_pause?: number;
  keyword_id?: number | string;
  match_type?: KeywordUpdateV2V2KeywordsMatchType;
  word_id?: number | string;
}

