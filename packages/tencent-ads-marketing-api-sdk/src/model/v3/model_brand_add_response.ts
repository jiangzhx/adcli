// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_brand_add_response.go
// Do not edit manually.

import type { ApiErrorStruct, BrandAddResponseData } from "../v3/index";

export interface BrandAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: BrandAddResponseData;
}

