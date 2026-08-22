// Generated from github.com/bububa/kwai-marketing-api/api/dsp/creative/update.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import type { KuaishouId } from "../../../model";
import { UpdateRequest, UpdateRequestInit } from "../../../model/dsp/creative";

export async function update(client: SDKClient, accessToken: string, req: UpdateRequest | UpdateRequestInit, signal?: AbortSignal): Promise<KuaishouId> {
  const request = req instanceof UpdateRequest ? req : new UpdateRequest(req);
  const resp = await client.post<{ creative_id?: KuaishouId }>(accessToken, request, signal);
  return resp.creative_id ?? 0;
}

export { update as Update };
