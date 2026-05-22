// Generated from tencentad/marketing-api-go-sdk pkg/model/model_report_landing_page_response.go
// Do not edit manually.

import type { ApiErrorStruct, ReportLandingPageResponseData } from "../model/index";

export interface ReportLandingPageResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: ReportLandingPageResponseData;
}

