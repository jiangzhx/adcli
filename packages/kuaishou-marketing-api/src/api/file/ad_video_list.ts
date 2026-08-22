// Generated from github.com/bububa/kwai-marketing-api/api/file/ad_video_list.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { AdVideoListRequest, AdVideoListRequestInit, AdVideoListResponse } from "../../model/file";

export async function adVideoList(client: SDKClient, accessToken: string, req: AdVideoListRequest | AdVideoListRequestInit, signal?: AbortSignal): Promise<AdVideoListResponse> {
  const request = req instanceof AdVideoListRequest ? req : new AdVideoListRequest(req);
  return client.post<AdVideoListResponse>(accessToken, request, signal);
}

export { adVideoList as AdVideoList };
