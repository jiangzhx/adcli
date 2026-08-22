// Generated from github.com/bububa/kwai-marketing-api/api/unit/create_union.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import type { KuaishouId } from "../../model";
import { CreateUnionRequest, CreateUnionRequestInit } from "../../model/unit";

export async function createUnion(client: SDKClient, accessToken: string, req: CreateUnionRequest | CreateUnionRequestInit, signal?: AbortSignal): Promise<KuaishouId> {
  const request = req instanceof CreateUnionRequest ? req : new CreateUnionRequest(req);
  const resp = await client.post<{ unit_id?: KuaishouId }>(accessToken, request, signal);
  return resp.unit_id ?? 0;
}

export { createUnion as CreateUnion };
