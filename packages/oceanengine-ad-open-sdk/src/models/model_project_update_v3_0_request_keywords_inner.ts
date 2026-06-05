// 由 oceanengine/ad_open_sdk_go models/model_project_update_v3_0_request_keywords_inner.go 生成
// 不要手动编辑。

import type { ProjectUpdateV30KeywordsBidType, ProjectUpdateV30KeywordsMatchType } from "../models/index";

export interface ProjectUpdateV30RequestKeywordsInner {
  bid?: number;
  bid_type?: ProjectUpdateV30KeywordsBidType;
  match_type: ProjectUpdateV30KeywordsMatchType;
  word: string;
}

