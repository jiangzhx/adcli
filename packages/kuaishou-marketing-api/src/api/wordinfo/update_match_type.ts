// Generated from github.com/bububa/kwai-marketing-api/api/wordinfo/update_match_type.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import type { KuaishouId } from "../../model";
import { UpdateMatchTypeRequest, UpdateMatchTypeRequestInit } from "../../model/wordinfo";

export async function updateMatchType(client: SDKClient, accessToken: string, req: UpdateMatchTypeRequest | UpdateMatchTypeRequestInit, signal?: AbortSignal): Promise<KuaishouId[]> {
  const request = req instanceof UpdateMatchTypeRequest ? req : new UpdateMatchTypeRequest(req);
  const resp = await client.post<{ word_info_ids?: KuaishouId[] }>(accessToken, request, signal);
  return resp.word_info_ids ?? [];
}

export { updateMatchType as UpdateMatchType };
