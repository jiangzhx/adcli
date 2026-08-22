// Generated from github.com/bububa/kwai-marketing-api/api/appcenter/app/detail.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { DetailRequest, DetailRequestInit, App } from "../../../model/appcenter/app";

export async function detail(client: SDKClient, accessToken: string, req: DetailRequest | DetailRequestInit, signal?: AbortSignal): Promise<App> {
  const request = req instanceof DetailRequest ? req : new DetailRequest(req);
  return client.post<App>(accessToken, request, signal);
}

export { detail as Detail };
