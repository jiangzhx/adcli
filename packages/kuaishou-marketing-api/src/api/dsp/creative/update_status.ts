// Generated from github.com/bububa/kwai-marketing-api/api/dsp/creative/update_status.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import type { KuaishouId } from "../../../model";
import { UpdateStatusRequest, UpdateStatusRequestInit } from "../../../model/dsp/creative";

export async function updateStatus(client: SDKClient, accessToken: string, req: UpdateStatusRequest | UpdateStatusRequestInit, signal?: AbortSignal): Promise<KuaishouId[]> {
  const request = req instanceof UpdateStatusRequest ? req : new UpdateStatusRequest(req);
  const resp = await client.post<{ creative_ids?: KuaishouId[] }>(accessToken, request, signal);
  return resp.creative_ids ?? [];
}

export { updateStatus as UpdateStatus };
