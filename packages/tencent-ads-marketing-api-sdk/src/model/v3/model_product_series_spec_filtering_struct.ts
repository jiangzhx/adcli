// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_product_series_spec_filtering_struct.go
// Do not edit manually.

import type { ProductSeriesSpecFilteringValueStruct, ProductSetSpecFieldValueOperator } from "../v3/index";

export interface ProductSeriesSpecFilteringStruct {
  field?: string;
  operator?: ProductSetSpecFieldValueOperator;
  values?: ProductSeriesSpecFilteringValueStruct[];
}

