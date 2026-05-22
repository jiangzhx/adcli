// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_business_unit_add_response.go
// Do not edit manually.

import type { ApiErrorStruct, BusinessUnitAddResponseData } from "../v3/index";

export interface BusinessUnitAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: BusinessUnitAddResponseData;
}

