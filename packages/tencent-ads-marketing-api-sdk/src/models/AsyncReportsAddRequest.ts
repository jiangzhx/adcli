// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { AsyncReportLevel, AsyncReportsFilteringStruct, ReportGranularity, TimeLine } from "../models";

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

