// Generated from tencentad/marketing-api-go-sdk pkg/model/model_oauth_token_response_data.go
// Do not edit manually.

import type { AuthorizerStruct } from "../model/index";

export interface OauthTokenResponseData {
  authorizer_info?: AuthorizerStruct;
  access_token?: string;
  refresh_token?: string;
  access_token_expires_in?: number;
  refresh_token_expires_in?: number;
}

