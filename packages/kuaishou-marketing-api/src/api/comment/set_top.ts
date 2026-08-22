// Generated from github.com/bububa/kwai-marketing-api/api/comment/set_top.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import type { KuaishouId } from "../../model";
import { SetTopRequest, SetTopRequestInit } from "../../model/comment";

export async function setTop(client: SDKClient, accessToken: string, req: SetTopRequest | SetTopRequestInit, signal?: AbortSignal): Promise<KuaishouId> {
  const request = req instanceof SetTopRequest ? req : new SetTopRequest(req);
  const resp = await client.post<{ comment_id?: KuaishouId }>(accessToken, request, signal);
  return resp.comment_id ?? 0;
}

export { setTop as SetTop };
