// 由 oceanengine/ad_open_sdk_go models/model_tools_promotion_raise_set_v3_0_request.go 生成
// 不要手动编辑。

import type { ToolsPromotionRaiseSetV30RequestRaiseInfoInner } from "../models/index";

export interface ToolsPromotionRaiseSetV30Request {
  advertiser_id: number | string;
  promotion_id: number | string;
  raise_info: ToolsPromotionRaiseSetV30RequestRaiseInfoInner[];
}

