// 由 oceanengine/ad_open_sdk_go models/model_project_budget_update_v3_0_request_data_inner.go 生成
// 不要手动编辑。

import type { ProjectBudgetUpdateV30DataBudgetMode } from "../models/index";

export interface ProjectBudgetUpdateV30RequestDataInner {
  budget?: number;
  budget_mode: ProjectBudgetUpdateV30DataBudgetMode;
  project_id: number | string;
}

