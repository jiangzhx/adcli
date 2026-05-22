// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_wechat_channels_authorization_update_response.go
// Do not edit manually.

import type { ApiErrorStruct, WechatChannelsAuthorizationUpdateResponseData } from "../v3/index";

export interface WechatChannelsAuthorizationUpdateResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: WechatChannelsAuthorizationUpdateResponseData;
}

