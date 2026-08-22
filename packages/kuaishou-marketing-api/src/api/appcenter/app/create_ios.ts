// Generated from github.com/bububa/kwai-marketing-api/api/appcenter/app/create_ios.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { CreateIosRequest, CreateIosRequestInit, App } from "../../../model/appcenter/app";

export async function createIos(client: SDKClient, accessToken: string, req: CreateIosRequest | CreateIosRequestInit, signal?: AbortSignal): Promise<App> {
  const request = req instanceof CreateIosRequest ? req : new CreateIosRequest(req);
  return client.post<App>(accessToken, request, signal);
}

export { createIos as CreateIos };
