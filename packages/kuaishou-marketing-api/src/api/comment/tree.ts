// Generated from github.com/bububa/kwai-marketing-api/api/comment/tree.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { TreeRequest, TreeRequestInit, TreeResponse } from "../../model/comment";

export async function tree(client: SDKClient, accessToken: string, req: TreeRequest | TreeRequestInit, signal?: AbortSignal): Promise<TreeResponse> {
  const request = req instanceof TreeRequest ? req : new TreeRequest(req);
  return client.post<TreeResponse>(accessToken, request, signal);
}

export { tree as Tree };
