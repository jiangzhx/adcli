// Generated from github.com/bububa/kwai-marketing-api/api/appcenter/subpkg/mod.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { ModRequest, ModRequestInit } from "../../../model/appcenter/subpkg";

export async function mod(client: SDKClient, accessToken: string, req: ModRequest | ModRequestInit, signal?: AbortSignal): Promise<void> {
  const request = req instanceof ModRequest ? req : new ModRequest(req);
  await client.post<unknown>(accessToken, request, signal);
}

export { mod as Mod };
