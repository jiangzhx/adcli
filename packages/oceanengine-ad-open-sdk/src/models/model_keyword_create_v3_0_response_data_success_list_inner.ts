// Generated from oceanengine/ad_open_sdk_go models/model_keyword_create_v3_0_response_data_success_list_inner.go
// Do not edit manually.

import type { KeywordCreateV30DataSuccessListBidType, KeywordCreateV30DataSuccessListMatchType, KeywordCreateV30DataSuccessListStatus } from "../models/index";

export interface KeywordCreateV30ResponseDataSuccessListInner {
  bid?: number;
  bid_type?: KeywordCreateV30DataSuccessListBidType;
  keyword_id?: number | string;
  match_type?: KeywordCreateV30DataSuccessListMatchType;
  status?: KeywordCreateV30DataSuccessListStatus;
  word?: string;
}

