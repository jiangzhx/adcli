// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_components_add_response.go
// Do not edit manually.

import type { ApiErrorStruct, ComponentsAddResponseData } from "../v3/index";

export interface ComponentsAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: ComponentsAddResponseData;
}

