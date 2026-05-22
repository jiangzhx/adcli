// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_product_recommend_method.go
// Do not edit manually.

import type { SubMethod } from "../v3/index";

export interface ProductRecommendMethod {
  method_id?: number | string;
  method_name?: string;
  method_description?: string;
  sub_method_operators?: string[];
  sub_methods?: SubMethod[];
}

