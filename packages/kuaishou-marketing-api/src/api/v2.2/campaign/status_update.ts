// Generated from github.com/bububa/kwai-marketing-api/api/v2.2/campaign/status_update.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import type { KuaishouId } from "../../../model";
import { StatusUpdateRequest, StatusUpdateRequestInit } from "../../../model/v2.2/campaign";

export async function statusUpdate(client: SDKClient, accessToken: string, req: StatusUpdateRequest | StatusUpdateRequestInit, signal?: AbortSignal): Promise<KuaishouId[]> {
  const request = req instanceof StatusUpdateRequest ? req : new StatusUpdateRequest(req);
  const resp = await client.post<{ campaign_ids?: KuaishouId[] }>(accessToken, request, signal);
  return resp.campaign_ids ?? [];
}

export { statusUpdate as StatusUpdate };
