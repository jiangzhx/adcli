// Generated from tencentad/marketing-api-go-sdk pkg/model/model_capabilities_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, CapabilitiesGetResponseData } from "../model/index";

export interface CapabilitiesGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: CapabilitiesGetResponseData;
}

