// Generated from github.com/bububa/kwai-marketing-api/api/appcenter/app/release.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { ReleaseRequest, ReleaseRequestInit, App } from "../../../model/appcenter/app";

export async function release(client: SDKClient, accessToken: string, req: ReleaseRequest | ReleaseRequestInit, signal?: AbortSignal): Promise<App> {
  const request = req instanceof ReleaseRequest ? req : new ReleaseRequest(req);
  return client.post<App>(accessToken, request, signal);
}

export { release as Release };
