// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_wechat_shop_authorization_add_response.go
// Do not edit manually.

import type { ApiErrorStruct, WechatShopAuthorizationAddResponseData } from "../v3/index";

export interface WechatShopAuthorizationAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: WechatShopAuthorizationAddResponseData;
}

