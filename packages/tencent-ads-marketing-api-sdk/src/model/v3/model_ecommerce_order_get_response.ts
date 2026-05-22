// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_ecommerce_order_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, EcommerceOrderGetResponseData } from "../v3/index";

export interface EcommerceOrderGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: EcommerceOrderGetResponseData;
}

