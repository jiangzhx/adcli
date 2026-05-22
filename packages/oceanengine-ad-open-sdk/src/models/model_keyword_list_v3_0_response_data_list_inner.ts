// Generated from oceanengine/ad_open_sdk_go models/model_keyword_list_v3_0_response_data_list_inner.go
// Do not edit manually.

import type { KeywordListV30DataListBidType, KeywordListV30DataListMatchType, KeywordListV30DataListStatus } from "../models/index";

export interface KeywordListV30ResponseDataListInner {
  bid?: number;
  bid_type?: KeywordListV30DataListBidType;
  is_pause?: number;
  keyword_id?: number | string;
  match_type?: KeywordListV30DataListMatchType;
  status?: KeywordListV30DataListStatus;
  word?: string;
  word_id?: number | string;
}

