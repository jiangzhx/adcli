// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { ToolsTaskRaiseGetV2DataReportsBudgetMode, ToolsTaskRaiseGetV2DataReportsRaiseMode, ToolsTaskRaiseGetV2DataReportsStatus } from "../models";

export interface ToolsTaskRaiseGetV2ResponseDataReportsInner {
  allocated_budget?: number;
  budget_mode?: ToolsTaskRaiseGetV2DataReportsBudgetMode;
  duration?: number;
  increased_cost?: number;
  name?: string;
  raise_mode?: ToolsTaskRaiseGetV2DataReportsRaiseMode;
  report_id?: number;
  start_time?: string;
  status?: ToolsTaskRaiseGetV2DataReportsStatus;
}

