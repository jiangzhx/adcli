// 由 oceanengine/ad_open_sdk_go models/model_promotion_budget_update_v3_0_request_data_inner.go 生成
// 不要手动编辑。

import type { PromotionBudgetUpdateV30DataBudgetMode } from "../models/index";

export interface PromotionBudgetUpdateV30RequestDataInner {
  budget: number;
  budget_mode?: PromotionBudgetUpdateV30DataBudgetMode;
  promotion_id: number | string;
}

