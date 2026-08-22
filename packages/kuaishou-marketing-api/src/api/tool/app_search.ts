// Generated from github.com/bububa/kwai-marketing-api/api/tool/app_search.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { AppSearchRequest, AppSearchRequestInit, TargetingApp } from "../../model/tool";

export async function appSearch(client: SDKClient, accessToken: string, req: AppSearchRequest | AppSearchRequestInit, signal?: AbortSignal): Promise<TargetingApp> {
  const request = req instanceof AppSearchRequest ? req : new AppSearchRequest(req);
  return client.get<TargetingApp>(accessToken, request, signal);
}

export { appSearch as AppSearch };
