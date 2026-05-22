// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_material_labels_bind_response.go
// Do not edit manually.

import type { ApiErrorStruct, MaterialLabelsBindResponseData } from "../v3/index";

export interface MaterialLabelsBindResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: MaterialLabelsBindResponseData;
}

