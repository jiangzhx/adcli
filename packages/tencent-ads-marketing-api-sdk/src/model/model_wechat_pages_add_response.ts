// Generated from tencentad/marketing-api-go-sdk pkg/model/model_wechat_pages_add_response.go
// Do not edit manually.

import type { ApiErrorStruct, WechatPagesAddResponseData } from "../model/index";

export interface WechatPagesAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: WechatPagesAddResponseData;
}

