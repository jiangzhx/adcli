// Generated from github.com/bububa/kwai-marketing-api/api/native/user_list.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { UserListRequest, UserListRequestInit, UserListResponse } from "../../model/native";

export async function userList(client: SDKClient, accessToken: string, req: UserListRequest | UserListRequestInit, signal?: AbortSignal): Promise<UserListResponse> {
  const request = req instanceof UserListRequest ? req : new UserListRequest(req);
  return client.post<UserListResponse>(accessToken, request, signal);
}

export { userList as UserList };
