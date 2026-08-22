// Generated from github.com/bububa/kwai-marketing-api/api/creative/create.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import type { KuaishouId } from "../../model";
import { CreateRequest, CreateRequestInit } from "../../model/creative";

export async function create(client: SDKClient, accessToken: string, req: CreateRequest | CreateRequestInit, signal?: AbortSignal): Promise<KuaishouId> {
  const request = req instanceof CreateRequest ? req : new CreateRequest(req);
  const resp = await client.post<{ creative_id?: KuaishouId }>(accessToken, request, signal);
  return resp.creative_id ?? 0;
}

export { create as Create };
