// 由 oceanengine/ad_open_sdk_go models/model_local_budget_update_v3_0_request.go 生成
// 不要手动编辑。

import type { LocalBudgetUpdateV30BudgetMode, LocalBudgetUpdateV30EffectiveMode } from "../models/index";

export interface LocalBudgetUpdateV30Request {
  budget?: number;
  budget_mode: LocalBudgetUpdateV30BudgetMode;
  effective_mode: LocalBudgetUpdateV30EffectiveMode;
  local_account_id: number | string;
}

