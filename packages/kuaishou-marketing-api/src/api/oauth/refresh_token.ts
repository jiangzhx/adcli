// Generated from github.com/bububa/kwai-marketing-api/api/oauth/refresh_token.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { RefreshTokenRequest, RefreshTokenRequestInit, AccessTokenResponse } from "../../model/oauth";

export async function refreshToken(client: SDKClient, refreshToken: string, signal?: AbortSignal): Promise<AccessTokenResponse> {
  const req = new RefreshTokenRequest({
    app_id: client.AppID(),
    secret: client.Secret(),
    refresh_token: refreshToken,
  });
  return client.post<AccessTokenResponse>("", req, signal);
}

export { refreshToken as RefreshToken };
