// Generated from github.com/bububa/kwai-marketing-api/api/live/list_live_user.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { ListLiveUserRequest, ListLiveUserRequestInit, ListLiveUserResponse } from "../../model/live";

export async function listLiveUser(client: SDKClient, accessToken: string, req: ListLiveUserRequest | ListLiveUserRequestInit, signal?: AbortSignal): Promise<ListLiveUserResponse> {
  const request = req instanceof ListLiveUserRequest ? req : new ListLiveUserRequest(req);
  return client.post<ListLiveUserResponse>(accessToken, request, signal);
}

export { listLiveUser as ListLiveUser };
