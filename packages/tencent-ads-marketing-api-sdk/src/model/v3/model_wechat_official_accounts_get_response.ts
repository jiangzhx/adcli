// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_wechat_official_accounts_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, WechatOfficialAccountsGetResponseData } from "../v3/index";

export interface WechatOfficialAccountsGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: WechatOfficialAccountsGetResponseData;
}

