// Generated from github.com/bububa/kwai-marketing-api/api/asset/adv_card_list.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { AdvCardListRequest, AdvCardListRequestInit, AdvCardListResponse } from "../../model/asset";

export async function advCardList(client: SDKClient, accessToken: string, req: AdvCardListRequest | AdvCardListRequestInit, signal?: AbortSignal): Promise<AdvCardListResponse> {
  const request = req instanceof AdvCardListRequest ? req : new AdvCardListRequest(req);
  return client.post<AdvCardListResponse>(accessToken, request, signal);
}

export { advCardList as AdvCardList };
