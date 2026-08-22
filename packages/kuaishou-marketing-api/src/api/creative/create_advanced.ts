// Generated from github.com/bububa/kwai-marketing-api/api/creative/create_advanced.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import type { KuaishouId } from "../../model";
import { CreateAdvancedRequest, CreateAdvancedRequestInit } from "../../model/creative";

export async function createAdvanced(client: SDKClient, accessToken: string, req: CreateAdvancedRequest | CreateAdvancedRequestInit, signal?: AbortSignal): Promise<KuaishouId> {
  const request = req instanceof CreateAdvancedRequest ? req : new CreateAdvancedRequest(req);
  const resp = await client.post<{ unit_id?: KuaishouId }>(accessToken, request, signal);
  return resp.unit_id ?? 0;
}

export { createAdvanced as CreateAdvanced };
