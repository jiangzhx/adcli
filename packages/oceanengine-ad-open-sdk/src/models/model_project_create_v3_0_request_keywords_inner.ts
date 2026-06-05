// 由 oceanengine/ad_open_sdk_go models/model_project_create_v3_0_request_keywords_inner.go 生成
// 不要手动编辑。

import type { ProjectCreateV30KeywordsBidType, ProjectCreateV30KeywordsMatchType } from "../models/index";

export interface ProjectCreateV30RequestKeywordsInner {
  bid?: number;
  bid_type?: ProjectCreateV30KeywordsBidType;
  match_type: ProjectCreateV30KeywordsMatchType;
  word: string;
}

