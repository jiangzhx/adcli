// Generated from tencentad/marketing-api-go-sdk pkg/model/model_ecommerce_order_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, EcommerceOrderGetResponseData } from "../model/index";

export interface EcommerceOrderGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: EcommerceOrderGetResponseData;
}

