// Generated from tencentad/marketing-api-go-sdk pkg/model/model_product_series_add_request.go
// Do not edit manually.

import type { ProductSeriesSpec } from "../model/index";

export interface ProductSeriesAddRequest {
  account_id?: number | string;
  catalog_id?: number | string;
  series_name?: string;
  definition?: ProductSeriesSpec;
}

