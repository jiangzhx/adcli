// 由 oceanengine/ad_open_sdk_go models/model_tools_task_raise_create_v2_request.go 生成
// 不要手动编辑。

import type { ToolsTaskRaiseCreateV2BudgetMode, ToolsTaskRaiseCreateV2RaiseMode } from "../models/index";

export interface ToolsTaskRaiseCreateV2Request {
  advertiser_id: number | string;
  allocated_budget?: number;
  budget_mode: ToolsTaskRaiseCreateV2BudgetMode;
  end_time?: string;
  raise_mode?: ToolsTaskRaiseCreateV2RaiseMode;
}

