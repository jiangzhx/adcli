// Generated from github.com/bububa/kwai-marketing-api/api/appcenter/app/offline.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { OfflineRequest, OfflineRequestInit } from "../../../model/appcenter/app";

export async function offline(client: SDKClient, accessToken: string, req: OfflineRequest | OfflineRequestInit, signal?: AbortSignal): Promise<void> {
  const request = req instanceof OfflineRequest ? req : new OfflineRequest(req);
  await client.post<unknown>(accessToken, request, signal);
}

export { offline as Offline };
