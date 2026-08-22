// Generated from github.com/bububa/kwai-marketing-api/api/v2.2/creative/list.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { ListRequest, ListRequestInit, ListResponse } from "../../../model/v2.2/creative";

export async function list(client: SDKClient, accessToken: string, req: ListRequest | ListRequestInit, signal?: AbortSignal): Promise<ListResponse> {
  const request = req instanceof ListRequest ? req : new ListRequest(req);
  return client.post<ListResponse>(accessToken, request, signal);
}

export { list as List };
