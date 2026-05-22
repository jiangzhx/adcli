// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_product_items_add_response.go
// Do not edit manually.

import type { ApiErrorStruct, ProductItemsAddResponseData } from "../v3/index";

export interface ProductItemsAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: ProductItemsAddResponseData;
}

