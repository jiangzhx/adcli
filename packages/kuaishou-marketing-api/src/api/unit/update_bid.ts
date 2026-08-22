// Generated from github.com/bububa/kwai-marketing-api/api/unit/update_bid.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { UpdateBidRequest, UpdateBidRequestInit } from "../../model/unit";

export async function updateBid(client: SDKClient, accessToken: string, req: UpdateBidRequest | UpdateBidRequestInit, signal?: AbortSignal): Promise<void> {
  const request = req instanceof UpdateBidRequest ? req : new UpdateBidRequest(req);
  await client.post<unknown>(accessToken, request, signal);
}

export { updateBid as UpdateBid };
