// Generated from tencentad/marketing-api-go-sdk pkg/model/model_material_audit_submit_response.go
// Do not edit manually.

import type { ApiErrorStruct, MaterialAuditSubmitResponseData } from "../model/index";

export interface MaterialAuditSubmitResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: MaterialAuditSubmitResponseData;
}

