// Generated from github.com/bububa/kwai-marketing-api/api/oauth/url.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { UrlRequest, UrlRequestInit } from "../../model/oauth";

export function url(client: SDKClient, req: UrlRequest | UrlRequestInit): string {
  const request = req instanceof UrlRequest ? req : new UrlRequest(req);
  request.app_id = client.AppID();
  return `${client.oauthUrl}/${request.path()}?${request.encode()}`;
}

export { url as Url };
