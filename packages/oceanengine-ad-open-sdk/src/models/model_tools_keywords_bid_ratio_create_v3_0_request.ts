// 由 oceanengine/ad_open_sdk_go models/model_tools_keywords_bid_ratio_create_v3_0_request.go 生成
// 不要手动编辑。

import type { ToolsKeywordsBidRatioCreateV30Dimension } from "../models/index";

export interface ToolsKeywordsBidRatioCreateV30Request {
  advertiser_id: number | string;
  bid_ratio: number;
  dimension: ToolsKeywordsBidRatioCreateV30Dimension;
  project_ids?: (number | string)[];
  word_list: string[];
}

