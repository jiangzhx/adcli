// Generated from github.com/bububa/kwai-marketing-api/api/comment/shield_info_list.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { ShieldInfoListRequest, ShieldInfoListRequestInit, ShieldInfoListResponse } from "../../model/comment";

export async function shieldInfoList(client: SDKClient, accessToken: string, req: ShieldInfoListRequest | ShieldInfoListRequestInit, signal?: AbortSignal): Promise<ShieldInfoListResponse> {
  const request = req instanceof ShieldInfoListRequest ? req : new ShieldInfoListRequest(req);
  return client.post<ShieldInfoListResponse>(accessToken, request, signal);
}

export { shieldInfoList as ShieldInfoList };
