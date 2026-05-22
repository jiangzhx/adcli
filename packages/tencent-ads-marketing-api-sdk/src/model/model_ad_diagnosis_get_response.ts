// Generated from tencentad/marketing-api-go-sdk pkg/model/model_ad_diagnosis_get_response.go
// Do not edit manually.

import type { AdDiagnosisGetResponseData, ApiErrorStruct } from "../model/index";

export interface AdDiagnosisGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: AdDiagnosisGetResponseData;
}

