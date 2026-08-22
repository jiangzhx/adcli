// Generated from github.com/bububa/kwai-marketing-api/api/appcenter/app/update_ios.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { UpdateIosRequest, UpdateIosRequestInit, App } from "../../../model/appcenter/app";

export async function updateIos(client: SDKClient, accessToken: string, req: UpdateIosRequest | UpdateIosRequestInit, signal?: AbortSignal): Promise<App> {
  const request = req instanceof UpdateIosRequest ? req : new UpdateIosRequest(req);
  return client.post<App>(accessToken, request, signal);
}

export { updateIos as UpdateIos };
