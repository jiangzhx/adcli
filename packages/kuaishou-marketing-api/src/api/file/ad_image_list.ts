// Generated from github.com/bububa/kwai-marketing-api/api/file/ad_image_list.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { AdImageListRequest, AdImageListRequestInit, AdImageListResponse } from "../../model/file";

export async function adImageList(client: SDKClient, accessToken: string, req: AdImageListRequest | AdImageListRequestInit, signal?: AbortSignal): Promise<AdImageListResponse> {
  const request = req instanceof AdImageListRequest ? req : new AdImageListRequest(req);
  return client.post<AdImageListResponse>(accessToken, request, signal);
}

export { adImageList as AdImageList };
