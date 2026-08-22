// Generated from github.com/bububa/kwai-marketing-api/api/unit/update_union.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import type { KuaishouId } from "../../model";
import { UpdateUnionRequest, UpdateUnionRequestInit } from "../../model/unit";

export async function updateUnion(client: SDKClient, accessToken: string, req: UpdateUnionRequest | UpdateUnionRequestInit, signal?: AbortSignal): Promise<KuaishouId> {
  const request = req instanceof UpdateUnionRequest ? req : new UpdateUnionRequest(req);
  const resp = await client.post<{ unit_id?: KuaishouId }>(accessToken, request, signal);
  return resp.unit_id ?? 0;
}

export { updateUnion as UpdateUnion };
