// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { DateRange, FilteringStruct } from "../models";

export interface ReportVideoFrameRequest {
  filtering?: FilteringStruct[];
  date_range?: DateRange;
  group_by?: string[];
  account_id?: number | string;
}

