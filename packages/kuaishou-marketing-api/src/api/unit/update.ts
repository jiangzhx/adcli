// Generated from github.com/bububa/kwai-marketing-api/api/unit/update.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import type { KuaishouId } from "../../model";
import { UpdateRequest, UpdateRequestInit } from "../../model/unit";

export async function update(client: SDKClient, accessToken: string, req: UpdateRequest | UpdateRequestInit, signal?: AbortSignal): Promise<KuaishouId> {
  const request = req instanceof UpdateRequest ? req : new UpdateRequest(req);
  const resp = await client.post<{ unit_id?: KuaishouId }>(accessToken, request, signal);
  return resp.unit_id ?? 0;
}

export { update as Update };
