// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { KeywordGetV2DataListBidType, KeywordGetV2DataListMatchType } from "../models";

export interface KeywordGetV2ResponseDataListInner {
  bid?: number;
  bid_type?: KeywordGetV2DataListBidType;
  is_pause?: number;
  keyword_id?: number;
  match_type?: KeywordGetV2DataListMatchType;
  word?: string;
  word_id?: number;
}

