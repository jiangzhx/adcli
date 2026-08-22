// Generated from github.com/bububa/kwai-marketing-api/api/comment/cancel_top.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import type { KuaishouId } from "../../model";
import { CancelTopRequest, CancelTopRequestInit } from "../../model/comment";

export async function cancelTop(client: SDKClient, accessToken: string, req: CancelTopRequest | CancelTopRequestInit, signal?: AbortSignal): Promise<KuaishouId> {
  const request = req instanceof CancelTopRequest ? req : new CancelTopRequest(req);
  const resp = await client.post<{ comment_id?: KuaishouId }>(accessToken, request, signal);
  return resp.comment_id ?? 0;
}

export { cancelTop as CancelTop };
