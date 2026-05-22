// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { KeywordCreateV30DataSuccessListBidType, KeywordCreateV30DataSuccessListMatchType, KeywordCreateV30DataSuccessListStatus } from "../models";

export interface KeywordCreateV30ResponseDataSuccessListInner {
  bid?: number;
  bid_type?: KeywordCreateV30DataSuccessListBidType;
  keyword_id?: number | string;
  match_type?: KeywordCreateV30DataSuccessListMatchType;
  status?: KeywordCreateV30DataSuccessListStatus;
  word?: string;
}

