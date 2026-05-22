// Generated from tencentad/marketing-api-go-sdk pkg/model/model_qualifications_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, QualificationsGetResponseData } from "../model/index";

export interface QualificationsGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: QualificationsGetResponseData;
}

