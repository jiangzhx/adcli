// Generated from github.com/bububa/kwai-marketing-api/api/asset/adv_card_create.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { AdvCardCreateRequest, AdvCardCreateRequestInit, AdvCard } from "../../model/asset";

export async function advCardCreate(client: SDKClient, accessToken: string, req: AdvCardCreateRequest | AdvCardCreateRequestInit, signal?: AbortSignal): Promise<AdvCard[]> {
  const request = req instanceof AdvCardCreateRequest ? req : new AdvCardCreateRequest(req);
  const resp = await client.post<{ adv_list?: AdvCard[] }>(accessToken, request, signal);
  return resp.adv_list ?? [];
}

export { advCardCreate as AdvCardCreate };
