// Generated from github.com/bububa/kwai-marketing-api/api/dsp/creative/advanced_creative_update.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import type { KuaishouId } from "../../../model";
import { AdvancedCreativeUpdateRequest, AdvancedCreativeUpdateRequestInit } from "../../../model/dsp/creative";

export async function advancedCreativeUpdate(client: SDKClient, accessToken: string, req: AdvancedCreativeUpdateRequest | AdvancedCreativeUpdateRequestInit, signal?: AbortSignal): Promise<KuaishouId> {
  const request = req instanceof AdvancedCreativeUpdateRequest ? req : new AdvancedCreativeUpdateRequest(req);
  const resp = await client.post<{ unit_id?: KuaishouId }>(accessToken, request, signal);
  return resp.unit_id ?? 0;
}

export { advancedCreativeUpdate as AdvancedCreativeUpdate };
