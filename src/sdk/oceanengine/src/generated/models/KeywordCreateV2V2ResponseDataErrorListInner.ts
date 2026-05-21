// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { KeywordCreateV2V2DataErrorListBidType, KeywordCreateV2V2DataErrorListMatchType } from "../models";

export interface KeywordCreateV2V2ResponseDataErrorListInner {
  bid?: number;
  bid_type?: KeywordCreateV2V2DataErrorListBidType;
  error_reason?: string;
  match_type?: KeywordCreateV2V2DataErrorListMatchType;
  word: string;
}

