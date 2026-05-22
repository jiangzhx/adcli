// Generated from tencentad/marketing-api-go-sdk pkg/model/model_qualifications_add_response.go
// Do not edit manually.

import type { ApiErrorStruct, QualificationsAddResponseData } from "../model/index";

export interface QualificationsAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: QualificationsAddResponseData;
}

