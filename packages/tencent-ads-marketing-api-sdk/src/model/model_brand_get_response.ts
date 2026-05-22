// Generated from tencentad/marketing-api-go-sdk pkg/model/model_brand_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, BrandGetResponseData } from "../model/index";

export interface BrandGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: BrandGetResponseData;
}

