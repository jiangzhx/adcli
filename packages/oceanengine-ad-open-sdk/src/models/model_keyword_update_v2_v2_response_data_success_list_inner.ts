// Generated from oceanengine/ad_open_sdk_go models/model_keyword_update_v2_v2_response_data_success_list_inner.go
// Do not edit manually.

import type { KeywordUpdateV2V2DataSuccessListBidType, KeywordUpdateV2V2DataSuccessListMatchType } from "../models/index";

export interface KeywordUpdateV2V2ResponseDataSuccessListInner {
  bid?: number;
  bid_type?: KeywordUpdateV2V2DataSuccessListBidType;
  is_pause?: number;
  keyword_id?: number | string;
  match_type?: KeywordUpdateV2V2DataSuccessListMatchType;
  word?: string;
  word_id?: number | string;
}

