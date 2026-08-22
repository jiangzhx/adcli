// Generated from github.com/bububa/kwai-marketing-api/api/comment/shield_info_delete.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { ShieldInfoDeleteRequest, ShieldInfoDeleteRequestInit } from "../../model/comment";

export async function shieldInfoDelete(client: SDKClient, accessToken: string, req: ShieldInfoDeleteRequest | ShieldInfoDeleteRequestInit, signal?: AbortSignal): Promise<void> {
  const request = req instanceof ShieldInfoDeleteRequest ? req : new ShieldInfoDeleteRequest(req);
  await client.post<unknown>(accessToken, request, signal);
}

export { shieldInfoDelete as ShieldInfoDelete };
