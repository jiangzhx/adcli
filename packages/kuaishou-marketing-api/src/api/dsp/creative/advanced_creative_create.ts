// Generated from github.com/bububa/kwai-marketing-api/api/dsp/creative/advanced_creative_create.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import type { KuaishouId } from "../../../model";
import { AdvancedCreativeCreateRequest, AdvancedCreativeCreateRequestInit } from "../../../model/dsp/creative";

export async function advancedCreativeCreate(client: SDKClient, accessToken: string, req: AdvancedCreativeCreateRequest | AdvancedCreativeCreateRequestInit, signal?: AbortSignal): Promise<KuaishouId> {
  const request = req instanceof AdvancedCreativeCreateRequest ? req : new AdvancedCreativeCreateRequest(req);
  const resp = await client.post<{ unit_id?: KuaishouId }>(accessToken, request, signal);
  return resp.unit_id ?? 0;
}

export { advancedCreativeCreate as AdvancedCreativeCreate };
