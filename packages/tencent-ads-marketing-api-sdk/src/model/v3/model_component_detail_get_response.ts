// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_component_detail_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, ComponentDetailGetResponseData } from "../v3/index";

export interface ComponentDetailGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: ComponentDetailGetResponseData;
}

