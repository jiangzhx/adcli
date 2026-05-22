// Generated from tencentad/marketing-api-go-sdk pkg/model/model_report_conversions_predict_response.go
// Do not edit manually.

import type { ApiErrorStruct, ReportConversionsPredictResponseData } from "../model/index";

export interface ReportConversionsPredictResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: ReportConversionsPredictResponseData;
}

