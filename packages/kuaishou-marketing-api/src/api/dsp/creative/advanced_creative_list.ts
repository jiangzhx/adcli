// Generated from github.com/bububa/kwai-marketing-api/api/dsp/creative/advanced_creative_list.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { AdvancedCreativeListRequest, AdvancedCreativeListRequestInit, AdvancedCreativeListResponse } from "../../../model/dsp/creative";

export async function advancedCreativeList(client: SDKClient, accessToken: string, req: AdvancedCreativeListRequest | AdvancedCreativeListRequestInit, signal?: AbortSignal): Promise<AdvancedCreativeListResponse> {
  const request = req instanceof AdvancedCreativeListRequest ? req : new AdvancedCreativeListRequest(req);
  return client.post<AdvancedCreativeListResponse>(accessToken, request, signal);
}

export { advancedCreativeList as AdvancedCreativeList };
