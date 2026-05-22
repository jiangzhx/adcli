// Generated from oceanengine/ad_open_sdk_go models/model_keyword_update_v2_v2_response_data_error_list_inner.go
// Do not edit manually.

import type { KeywordUpdateV2V2DataErrorListBidType, KeywordUpdateV2V2DataErrorListMatchType } from "../models/index";

export interface KeywordUpdateV2V2ResponseDataErrorListInner {
  bid?: number;
  bid_type?: KeywordUpdateV2V2DataErrorListBidType;
  error_reason?: string;
  is_pause?: number;
  keyword_id?: number | string;
  match_type?: KeywordUpdateV2V2DataErrorListMatchType;
  word_id?: number | string;
}

