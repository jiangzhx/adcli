// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { KeywordUpdateV30DataSuccessListBidType, KeywordUpdateV30DataSuccessListMatchType } from "../models";

export interface KeywordUpdateV30ResponseDataSuccessListInner {
  bid?: number;
  bid_type?: KeywordUpdateV30DataSuccessListBidType;
  is_pause?: number;
  keyword_id?: number;
  match_type?: KeywordUpdateV30DataSuccessListMatchType;
  word?: string;
  word_id?: number;
}

