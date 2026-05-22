// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_wechat_channels_authorization_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, WechatChannelsAuthorizationGetResponseData } from "../v3/index";

export interface WechatChannelsAuthorizationGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: WechatChannelsAuthorizationGetResponseData;
}

