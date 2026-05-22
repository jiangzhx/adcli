// Generated from oceanengine/ad_open_sdk_go models/model_keyword_get_v2_response_data_list_inner.go
// Do not edit manually.

import type { KeywordGetV2DataListBidType, KeywordGetV2DataListMatchType } from "../models/index";

export interface KeywordGetV2ResponseDataListInner {
  bid?: number;
  bid_type?: KeywordGetV2DataListBidType;
  is_pause?: number;
  keyword_id?: number | string;
  match_type?: KeywordGetV2DataListMatchType;
  word?: string;
  word_id?: number | string;
}

