// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { KeywordUpdateV2V2DataErrorListBidType, KeywordUpdateV2V2DataErrorListMatchType } from "../models";

export interface KeywordUpdateV2V2ResponseDataErrorListInner {
  bid?: number;
  bid_type?: KeywordUpdateV2V2DataErrorListBidType;
  error_reason?: string;
  is_pause?: number;
  keyword_id?: number | string;
  match_type?: KeywordUpdateV2V2DataErrorListMatchType;
  word_id?: number | string;
}

