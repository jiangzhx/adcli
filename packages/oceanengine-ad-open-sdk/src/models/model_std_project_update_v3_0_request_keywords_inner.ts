// 由 oceanengine/ad_open_sdk_go models/model_std_project_update_v3_0_request_keywords_inner.go 生成
// 不要手动编辑。

import type { StdProjectUpdateV30KeywordsBidType, StdProjectUpdateV30KeywordsMatchType } from "../models/index";

export interface StdProjectUpdateV30RequestKeywordsInner {
  bid?: number;
  bid_type?: StdProjectUpdateV30KeywordsBidType;
  match_type?: StdProjectUpdateV30KeywordsMatchType;
  word?: string;
}

