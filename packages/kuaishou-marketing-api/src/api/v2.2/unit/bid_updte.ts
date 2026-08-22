// Generated from github.com/bububa/kwai-marketing-api/api/v2.2/unit/bid_updte.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import type { KuaishouId } from "../../../model";
import { BidUpdateRequest, BidUpdateRequestInit } from "../../../model/v2.2/unit";

export async function bidUpdate(client: SDKClient, accessToken: string, req: BidUpdateRequest | BidUpdateRequestInit, signal?: AbortSignal): Promise<KuaishouId[]> {
  const request = req instanceof BidUpdateRequest ? req : new BidUpdateRequest(req);
  const resp = await client.post<{ unit_ids?: KuaishouId[] }>(accessToken, request, signal);
  return resp.unit_ids ?? [];
}

export { bidUpdate as BidUpdate };
