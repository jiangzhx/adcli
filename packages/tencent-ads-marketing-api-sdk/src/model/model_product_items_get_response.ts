// Generated from tencentad/marketing-api-go-sdk pkg/model/model_product_items_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, ProductItemsGetResponseData } from "../model/index";

export interface ProductItemsGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: ProductItemsGetResponseData;
}

