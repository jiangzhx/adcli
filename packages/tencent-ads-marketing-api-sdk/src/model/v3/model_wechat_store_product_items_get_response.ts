// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_wechat_store_product_items_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, WechatStoreProductItemsGetResponseData } from "../v3/index";

export interface WechatStoreProductItemsGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: WechatStoreProductItemsGetResponseData;
}

