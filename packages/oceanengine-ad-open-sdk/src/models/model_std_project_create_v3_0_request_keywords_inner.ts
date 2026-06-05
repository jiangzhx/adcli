// 由 oceanengine/ad_open_sdk_go models/model_std_project_create_v3_0_request_keywords_inner.go 生成
// 不要手动编辑。

import type { StdProjectCreateV30KeywordsBidType, StdProjectCreateV30KeywordsMatchType } from "../models/index";

export interface StdProjectCreateV30RequestKeywordsInner {
  bid?: number;
  bid_type?: StdProjectCreateV30KeywordsBidType;
  match_type?: StdProjectCreateV30KeywordsMatchType;
  word?: string;
}

