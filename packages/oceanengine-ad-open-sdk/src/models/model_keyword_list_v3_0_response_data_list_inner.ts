// 由 oceanengine/ad_open_sdk_go models/model_keyword_list_v3_0_response_data_list_inner.go 生成
// 不要手动编辑。

import type { KeywordListV30DataListBidType, KeywordListV30DataListKeywordType, KeywordListV30DataListMatchType, KeywordListV30DataListStatus } from "../models/index";

export interface KeywordListV30ResponseDataListInner {
  bid?: number;
  bid_type?: KeywordListV30DataListBidType;
  is_pause?: number;
  keyword_id?: number | string;
  keyword_type?: KeywordListV30DataListKeywordType;
  match_type?: KeywordListV30DataListMatchType;
  status?: KeywordListV30DataListStatus;
  word?: string;
  word_id?: number | string;
}

