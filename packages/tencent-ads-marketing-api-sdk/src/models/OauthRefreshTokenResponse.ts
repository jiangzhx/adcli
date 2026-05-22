// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { ApiErrorStruct, OauthRefreshTokenResponseData } from "../models";

export interface OauthRefreshTokenResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: OauthRefreshTokenResponseData;
}

