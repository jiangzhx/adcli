// Generated from github.com/bububa/kwai-marketing-api/api/appcenter/subpkg/release_list.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { ReleaseListRequest, ReleaseListRequestInit, ListResponse } from "../../../model/appcenter/subpkg";

export async function releaseList(client: SDKClient, accessToken: string, req: ReleaseListRequest | ReleaseListRequestInit, signal?: AbortSignal): Promise<ListResponse> {
  const request = req instanceof ReleaseListRequest ? req : new ReleaseListRequest(req);
  return client.post<ListResponse>(accessToken, request, signal);
}

export { releaseList as ReleaseList };
