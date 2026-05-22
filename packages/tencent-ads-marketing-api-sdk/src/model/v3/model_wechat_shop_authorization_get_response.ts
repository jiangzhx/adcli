// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_wechat_shop_authorization_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, WechatShopAuthorizationGetResponseData } from "../v3/index";

export interface WechatShopAuthorizationGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: WechatShopAuthorizationGetResponseData;
}

