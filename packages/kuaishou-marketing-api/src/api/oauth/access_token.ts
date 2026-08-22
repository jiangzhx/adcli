// Generated from github.com/bububa/kwai-marketing-api/api/oauth/access_token.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { AccessTokenRequest, AccessTokenRequestInit, AccessTokenResponse } from "../../model/oauth";

export async function accessToken(client: SDKClient, authCode: string, signal?: AbortSignal): Promise<AccessTokenResponse> {
  const req = new AccessTokenRequest({
    app_id: client.AppID(),
    secret: client.Secret(),
    auth_code: authCode,
  });
  return client.post<AccessTokenResponse>("", req, signal);
}

export { accessToken as AccessToken };
