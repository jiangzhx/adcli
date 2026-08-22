// Generated from github.com/bububa/kwai-marketing-api/api/tool/unit/suggest_bid_detail.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { SuggestBidDetailRequest, SuggestBidDetailRequestInit, SuggestBidUnit } from "../../../model/tool/unit";

export async function suggestBidDetail(client: SDKClient, accessToken: string, req: SuggestBidDetailRequest | SuggestBidDetailRequestInit, signal?: AbortSignal): Promise<SuggestBidUnit[]> {
  const request = req instanceof SuggestBidDetailRequest ? req : new SuggestBidDetailRequest(req);
  return client.post<SuggestBidUnit[]>(accessToken, request, signal);
}

export { suggestBidDetail as SuggestBidDetail };
