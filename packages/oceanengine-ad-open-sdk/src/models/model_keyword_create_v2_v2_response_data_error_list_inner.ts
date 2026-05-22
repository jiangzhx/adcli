// Generated from oceanengine/ad_open_sdk_go models/model_keyword_create_v2_v2_response_data_error_list_inner.go
// Do not edit manually.

import type { KeywordCreateV2V2DataErrorListBidType, KeywordCreateV2V2DataErrorListMatchType } from "../models/index";

export interface KeywordCreateV2V2ResponseDataErrorListInner {
  bid?: number;
  bid_type?: KeywordCreateV2V2DataErrorListBidType;
  error_reason?: string;
  match_type?: KeywordCreateV2V2DataErrorListMatchType;
  word: string;
}

