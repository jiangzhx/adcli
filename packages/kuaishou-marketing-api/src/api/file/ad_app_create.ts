// Generated from github.com/bububa/kwai-marketing-api/api/file/ad_app_create.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { AdAppCreateRequest, AdAppCreateRequestInit, App } from "../../model/file";

export async function adAppCreate(client: SDKClient, accessToken: string, req: AdAppCreateRequest | AdAppCreateRequestInit, signal?: AbortSignal): Promise<App> {
  const request = req instanceof AdAppCreateRequest ? req : new AdAppCreateRequest(req);
  return client.upload<App>(accessToken, request, signal);
}

export { adAppCreate as AdAppCreate };
