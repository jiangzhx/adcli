// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_components_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, ComponentsGetResponseData } from "../v3/index";

export interface ComponentsGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: ComponentsGetResponseData;
}

