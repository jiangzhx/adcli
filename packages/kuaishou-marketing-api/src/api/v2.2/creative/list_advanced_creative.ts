// Generated from github.com/bububa/kwai-marketing-api/api/v2.2/creative/list_advanced_creative.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { AdvancedCreativeListRequest, AdvancedCreativeListRequestInit, ListAdvancedCreativeResponse } from "../../../model/v2.2/creative";

export async function advancedCreativeList(client: SDKClient, accessToken: string, req: AdvancedCreativeListRequest | AdvancedCreativeListRequestInit, signal?: AbortSignal): Promise<ListAdvancedCreativeResponse> {
  const request = req instanceof AdvancedCreativeListRequest ? req : new AdvancedCreativeListRequest(req);
  return client.post<ListAdvancedCreativeResponse>(accessToken, request, signal);
}

export { advancedCreativeList as AdvancedCreativeList };
