// Generated from tencentad/marketing-api-go-sdk pkg/model/model_brand_add_response.go
// Do not edit manually.

import type { ApiErrorStruct, BrandAddResponseData } from "../model/index";

export interface BrandAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: BrandAddResponseData;
}

