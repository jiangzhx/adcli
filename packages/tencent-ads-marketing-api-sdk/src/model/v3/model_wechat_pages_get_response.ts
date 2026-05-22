// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_wechat_pages_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, WechatPagesGetResponseData } from "../v3/index";

export interface WechatPagesGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: WechatPagesGetResponseData;
}

