// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_product_series_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, ProductSeriesGetResponseData } from "../v3/index";

export interface ProductSeriesGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: ProductSeriesGetResponseData;
}

