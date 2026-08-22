// Generated from github.com/bububa/kwai-marketing-api/api/appcenter/app/online.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { OnlineRequest, OnlineRequestInit } from "../../../model/appcenter/app";

export async function online(client: SDKClient, accessToken: string, req: OnlineRequest | OnlineRequestInit, signal?: AbortSignal): Promise<void> {
  const request = req instanceof OnlineRequest ? req : new OnlineRequest(req);
  await client.post<unknown>(accessToken, request, signal);
}

export { online as Online };
