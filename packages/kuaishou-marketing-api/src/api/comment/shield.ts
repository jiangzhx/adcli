// Generated from github.com/bububa/kwai-marketing-api/api/comment/shield.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { ShieldRequest, ShieldRequestInit } from "../../model/comment";

export async function shield(client: SDKClient, accessToken: string, req: ShieldRequest | ShieldRequestInit, signal?: AbortSignal): Promise<void> {
  const request = req instanceof ShieldRequest ? req : new ShieldRequest(req);
  await client.post<unknown>(accessToken, request, signal);
}

export { shield as Shield };
