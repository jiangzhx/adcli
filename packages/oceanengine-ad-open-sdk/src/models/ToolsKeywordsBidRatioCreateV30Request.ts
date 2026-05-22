// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsKeywordsBidRatioCreateV30Dimension } from "../models";

export interface ToolsKeywordsBidRatioCreateV30Request {
  advertiser_id: number;
  bid_ratio: number;
  dimension: ToolsKeywordsBidRatioCreateV30Dimension;
  project_ids?: number[];
  word_list: string[];
}

