// Generated from tencentad/marketing-api-go-sdk pkg/model/model_property_sets_add_response.go
// Do not edit manually.

import type { ApiErrorStruct, PropertySetsAddResponseData } from "../model/index";

export interface PropertySetsAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: PropertySetsAddResponseData;
}

