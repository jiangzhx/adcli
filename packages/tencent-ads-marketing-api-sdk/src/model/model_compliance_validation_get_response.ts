// Generated from tencentad/marketing-api-go-sdk pkg/model/model_compliance_validation_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, ComplianceValidationGetResponseData } from "../model/index";

export interface ComplianceValidationGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: ComplianceValidationGetResponseData;
}

