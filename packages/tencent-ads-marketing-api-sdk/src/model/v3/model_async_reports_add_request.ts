// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_async_reports_add_request.go
// Do not edit manually.

import type { AsyncReportLevel, AsyncReportsFilteringStruct, ReportGranularity, TimeLine } from "../v3/index";

export interface AsyncReportsAddRequest {
  account_id?: number | string;
  task_name?: string;
  report_fields?: string[];
  level?: AsyncReportLevel;
  filtering?: AsyncReportsFilteringStruct[];
  time_line?: TimeLine;
  group_by?: string[];
  granularity?: ReportGranularity;
  date?: string;
  organization_id?: number | string;
}

