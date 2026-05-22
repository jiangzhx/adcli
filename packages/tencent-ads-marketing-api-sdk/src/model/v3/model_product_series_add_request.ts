// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_product_series_add_request.go
// Do not edit manually.

import type { ProductSeriesSpec } from "../v3/index";

export interface ProductSeriesAddRequest {
  account_id?: number | string;
  catalog_id?: number | string;
  series_name?: string;
  definition?: ProductSeriesSpec;
}

