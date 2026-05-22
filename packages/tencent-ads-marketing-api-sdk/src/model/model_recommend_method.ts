// Generated from tencentad/marketing-api-go-sdk pkg/model/model_recommend_method.go
// Do not edit manually.

import type { SubMethod } from "../model/index";

export interface RecommendMethod {
  method_id?: number | string;
  method_name?: string;
  method_description?: string;
  sub_method_operators?: string[];
  sub_methods?: SubMethod[];
}

