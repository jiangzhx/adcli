// Generated from github.com/bububa/kwai-marketing-api/api/file/ad_app_update.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { AdAppUpdateRequest, AdAppUpdateRequestInit, App } from "../../model/file";

export async function adAppUpdate(client: SDKClient, accessToken: string, req: AdAppUpdateRequest | AdAppUpdateRequestInit, signal?: AbortSignal): Promise<App> {
  const request = req instanceof AdAppUpdateRequest ? req : new AdAppUpdateRequest(req);
  return client.upload<App>(accessToken, request, signal);
}

export { adAppUpdate as AdAppUpdate };
