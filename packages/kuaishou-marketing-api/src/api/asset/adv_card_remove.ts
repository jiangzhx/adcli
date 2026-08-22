// Generated from github.com/bububa/kwai-marketing-api/api/asset/adv_card_remove.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import type { KuaishouId } from "../../model";
import { AdvCardRemoveRequest, AdvCardRemoveRequestInit } from "../../model/asset";

export async function advCardRemove(client: SDKClient, accessToken: string, req: AdvCardRemoveRequest | AdvCardRemoveRequestInit, signal?: AbortSignal): Promise<KuaishouId> {
  const request = req instanceof AdvCardRemoveRequest ? req : new AdvCardRemoveRequest(req);
  const resp = await client.post<{ adv_card_id?: KuaishouId }>(accessToken, request, signal);
  return resp.adv_card_id ?? 0;
}

export { advCardRemove as AdvCardRemove };
