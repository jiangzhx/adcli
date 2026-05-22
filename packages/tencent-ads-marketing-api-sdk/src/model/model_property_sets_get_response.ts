// Generated from tencentad/marketing-api-go-sdk pkg/model/model_property_sets_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, PropertySetsGetResponseData } from "../model/index";

export interface PropertySetsGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: PropertySetsGetResponseData;
}

