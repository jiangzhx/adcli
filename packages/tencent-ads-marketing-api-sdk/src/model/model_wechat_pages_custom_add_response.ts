// Generated from tencentad/marketing-api-go-sdk pkg/model/model_wechat_pages_custom_add_response.go
// Do not edit manually.

import type { ApiErrorStruct, WechatPagesCustomAddResponseData } from "../model/index";

export interface WechatPagesCustomAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: WechatPagesCustomAddResponseData;
}

