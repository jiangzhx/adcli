// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { KeywordCreateV2V2DataSuccessListBidType, KeywordCreateV2V2DataSuccessListMatchType } from "../models";

export interface KeywordCreateV2V2ResponseDataSuccessListInner {
  bid?: number;
  bid_type?: KeywordCreateV2V2DataSuccessListBidType;
  is_pause?: number;
  keyword_id?: number;
  match_type?: KeywordCreateV2V2DataSuccessListMatchType;
  word: string;
}

