// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ProjectUpdateV30KeywordsBidType, ProjectUpdateV30KeywordsMatchType } from "../models";

export interface ProjectUpdateV30RequestKeywordsInner {
  bid?: number;
  bid_type?: ProjectUpdateV30KeywordsBidType;
  match_type: ProjectUpdateV30KeywordsMatchType;
  word: string;
}

