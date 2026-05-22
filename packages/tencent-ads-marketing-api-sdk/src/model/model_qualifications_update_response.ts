// Generated from tencentad/marketing-api-go-sdk pkg/model/model_qualifications_update_response.go
// Do not edit manually.

import type { ApiErrorStruct, QualificationsUpdateResponseData } from "../model/index";

export interface QualificationsUpdateResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: QualificationsUpdateResponseData;
}

