// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsTaskRaiseCreateV2BudgetMode, ToolsTaskRaiseCreateV2RaiseMode } from "../models";

export interface ToolsTaskRaiseCreateV2Request {
  advertiser_id: number;
  allocated_budget?: number;
  budget_mode: ToolsTaskRaiseCreateV2BudgetMode;
  end_time?: string;
  raise_mode?: ToolsTaskRaiseCreateV2RaiseMode;
}

