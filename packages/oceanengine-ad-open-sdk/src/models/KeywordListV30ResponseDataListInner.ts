// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { KeywordListV30DataListBidType, KeywordListV30DataListMatchType, KeywordListV30DataListStatus } from "../models";

export interface KeywordListV30ResponseDataListInner {
  bid?: number;
  bid_type?: KeywordListV30DataListBidType;
  is_pause?: number;
  keyword_id?: number;
  match_type?: KeywordListV30DataListMatchType;
  status?: KeywordListV30DataListStatus;
  word?: string;
  word_id?: number;
}

