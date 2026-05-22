// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_oauth_refresh_token_response.go
// Do not edit manually.

import type { ApiErrorStruct, OauthRefreshTokenResponseData } from "../v3/index";

export interface OauthRefreshTokenResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: OauthRefreshTokenResponseData;
}

