// Generated from tencentad/marketing-api-go-sdk pkg/model/model_product_series_add_response.go
// Do not edit manually.

import type { ApiErrorStruct, ProductSeriesAddResponseData } from "../model/index";

export interface ProductSeriesAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: ProductSeriesAddResponseData;
}

