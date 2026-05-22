// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { KeywordUpdateV2V2DataSuccessListBidType, KeywordUpdateV2V2DataSuccessListMatchType } from "../models";

export interface KeywordUpdateV2V2ResponseDataSuccessListInner {
  bid?: number;
  bid_type?: KeywordUpdateV2V2DataSuccessListBidType;
  is_pause?: number;
  keyword_id?: number;
  match_type?: KeywordUpdateV2V2DataSuccessListMatchType;
  word?: string;
  word_id?: number;
}

