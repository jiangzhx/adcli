// Generated from github.com/bububa/kwai-marketing-api/model/oauth/access_token.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface AccessTokenRequestInit {
  secret?: string;
  auth_code?: string;
  app_id?: KuaishouId;
}

export class AccessTokenRequest implements PostRequest, AccessTokenRequestInit {
  secret?: string;
  auth_code?: string;
  app_id?: KuaishouId;

  constructor(init: AccessTokenRequestInit = {}) {
    this.secret = init.secret;
    this.auth_code = init.auth_code;
    this.app_id = init.app_id;
  }

  path() {
    return "oauth2/authorize/access_token";
  }

  encode() {
    return jsonMarshal({
      secret: this.secret,
      auth_code: this.auth_code,
      app_id: this.app_id,
    });
  }
}

export interface AccessTokenResponse {
  access_token?: string;
  refresh_token?: string;
  advertiser_ids?: KuaishouId[];
  access_token_expires_in?: number;
  refresh_token_expires_in?: number;
  advertiser_id?: KuaishouId;
  user_id?: KuaishouId;
  approval_type?: number;
}
