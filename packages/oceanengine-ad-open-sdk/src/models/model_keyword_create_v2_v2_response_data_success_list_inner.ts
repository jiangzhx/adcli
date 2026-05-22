// Generated from oceanengine/ad_open_sdk_go models/model_keyword_create_v2_v2_response_data_success_list_inner.go
// Do not edit manually.

import type { KeywordCreateV2V2DataSuccessListBidType, KeywordCreateV2V2DataSuccessListMatchType } from "../models/index";

export interface KeywordCreateV2V2ResponseDataSuccessListInner {
  bid?: number;
  bid_type?: KeywordCreateV2V2DataSuccessListBidType;
  is_pause?: number;
  keyword_id?: number | string;
  match_type?: KeywordCreateV2V2DataSuccessListMatchType;
  word: string;
}

