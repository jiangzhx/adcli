// 由 oceanengine/ad_open_sdk_go models/model_tools_privative_word_promotion_add_v3_0_response_data.go 生成
// 不要手动编辑。

import type { ToolsPrivativeWordPromotionAddV30ResponseDataErrorListInner } from "../models/index";

export interface ToolsPrivativeWordPromotionAddV30ResponseData {
  error_list?: ToolsPrivativeWordPromotionAddV30ResponseDataErrorListInner[];
  promotion_error_list?: number[];
  promotion_list?: Record<string, unknown>[];
}

