// Generated from tencentad/marketing-api-go-sdk pkg/model/model_report_video_frame_request.go
// Do not edit manually.

import type { DateRange, FilteringStruct } from "../model/index";

export interface ReportVideoFrameRequest {
  filtering?: FilteringStruct[];
  date_range?: DateRange;
  group_by?: string[];
  account_id?: number | string;
}

