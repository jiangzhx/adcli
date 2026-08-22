// Generated from github.com/bububa/kwai-marketing-api/api/live/list_jingle_bell.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { ListJingleBellRequest, ListJingleBellRequestInit, ListJingleBellResponse } from "../../model/live";

export async function listJingleBell(client: SDKClient, accessToken: string, req: ListJingleBellRequest | ListJingleBellRequestInit, signal?: AbortSignal): Promise<ListJingleBellResponse> {
  const request = req instanceof ListJingleBellRequest ? req : new ListJingleBellRequest(req);
  return client.post<ListJingleBellResponse>(accessToken, request, signal);
}

export { listJingleBell as ListJingleBell };
