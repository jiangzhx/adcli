// Generated from tencentad/marketing-api-go-sdk pkg/model/model_report_ad_union_response.go
// Do not edit manually.

import type { ApiErrorStruct, ReportAdUnionResponseData } from "../model/index";

export interface ReportAdUnionResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: ReportAdUnionResponseData;
}

