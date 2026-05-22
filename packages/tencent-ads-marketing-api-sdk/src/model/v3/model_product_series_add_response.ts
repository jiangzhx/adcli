// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_product_series_add_response.go
// Do not edit manually.

import type { ApiErrorStruct, ProductSeriesAddResponseData } from "../v3/index";

export interface ProductSeriesAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: ProductSeriesAddResponseData;
}

