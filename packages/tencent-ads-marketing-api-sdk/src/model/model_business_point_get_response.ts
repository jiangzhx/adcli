// Generated from tencentad/marketing-api-go-sdk pkg/model/model_business_point_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, BusinessPointGetResponseData } from "../model/index";

export interface BusinessPointGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: BusinessPointGetResponseData;
}

