// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_wechat_channels_authorization_add_response.go
// Do not edit manually.

import type { ApiErrorStruct, WechatChannelsAuthorizationAddResponseData } from "../v3/index";

export interface WechatChannelsAuthorizationAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: WechatChannelsAuthorizationAddResponseData;
}

