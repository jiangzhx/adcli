// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_oauth_token_response.go
// Do not edit manually.

import type { ApiErrorStruct, OauthTokenResponseData } from "../v3/index";

export interface OauthTokenResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: OauthTokenResponseData;
}

