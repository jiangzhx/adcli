// Generated from tencentad/marketing-api-go-sdk pkg/model/model_material_audit_list_response.go
// Do not edit manually.

import type { ApiErrorStruct, MaterialAuditListResponseData } from "../model/index";

export interface MaterialAuditListResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: MaterialAuditListResponseData;
}

