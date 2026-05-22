// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_wechat_shop_authorization_status_update_response.go
// Do not edit manually.

import type { ApiErrorStruct, WechatShopAuthorizationStatusUpdateResponseData } from "../v3/index";

export interface WechatShopAuthorizationStatusUpdateResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: WechatShopAuthorizationStatusUpdateResponseData;
}

