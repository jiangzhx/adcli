// Generated from oceanengine/ad_open_sdk_go models/model_tools_task_raise_get_v2_response_data_reports_inner.go
// Do not edit manually.

import type { ToolsTaskRaiseGetV2DataReportsBudgetMode, ToolsTaskRaiseGetV2DataReportsRaiseMode, ToolsTaskRaiseGetV2DataReportsStatus } from "../models/index";

export interface ToolsTaskRaiseGetV2ResponseDataReportsInner {
  allocated_budget?: number;
  budget_mode?: ToolsTaskRaiseGetV2DataReportsBudgetMode;
  duration?: number;
  increased_cost?: number;
  name?: string;
  raise_mode?: ToolsTaskRaiseGetV2DataReportsRaiseMode;
  report_id?: number | string;
  start_time?: string;
  status?: ToolsTaskRaiseGetV2DataReportsStatus;
}

