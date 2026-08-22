// Generated from github.com/bububa/kwai-marketing-api/api/comment/shield_info_create.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { ShieldInfoCreateRequest, ShieldInfoCreateRequestInit } from "../../model/comment";

export async function shieldInfoCreate(client: SDKClient, accessToken: string, req: ShieldInfoCreateRequest | ShieldInfoCreateRequestInit, signal?: AbortSignal): Promise<number[]> {
  const request = req instanceof ShieldInfoCreateRequest ? req : new ShieldInfoCreateRequest(req);
  const resp = await client.post<{ shield_info_id_list?: number[] }>(accessToken, request, signal);
  return resp.shield_info_id_list ?? [];
}

export { shieldInfoCreate as ShieldInfoCreate };
