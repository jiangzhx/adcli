// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_components_delete_response.go
// Do not edit manually.

import type { ApiErrorStruct, ComponentsDeleteResponseData } from "../v3/index";

export interface ComponentsDeleteResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: ComponentsDeleteResponseData;
}

