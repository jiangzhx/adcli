// Generated from github.com/bububa/kwai-marketing-api/model/oauth/refresh_token_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface RefreshTokenRequestInit {
  secret?: string;
  refresh_token?: string;
  app_id?: KuaishouId;
}

export class RefreshTokenRequest implements PostRequest, RefreshTokenRequestInit {
  secret?: string;
  refresh_token?: string;
  app_id?: KuaishouId;

  constructor(init: RefreshTokenRequestInit = {}) {
    this.secret = init.secret;
    this.refresh_token = init.refresh_token;
    this.app_id = init.app_id;
  }

  path() {
    return "oauth2/authorize/refresh_token";
  }

  encode() {
    return jsonMarshal({
      secret: this.secret,
      refresh_token: this.refresh_token,
      app_id: this.app_id,
    });
  }
}
