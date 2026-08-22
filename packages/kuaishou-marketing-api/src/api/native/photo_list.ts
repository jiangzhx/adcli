// Generated from github.com/bububa/kwai-marketing-api/api/native/photo_list.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { PhotoListRequest, PhotoListRequestInit, PhotoListResponse } from "../../model/native";

export async function photoList(client: SDKClient, accessToken: string, req: PhotoListRequest | PhotoListRequestInit, signal?: AbortSignal): Promise<PhotoListResponse> {
  const request = req instanceof PhotoListRequest ? req : new PhotoListRequest(req);
  return client.post<PhotoListResponse>(accessToken, request, signal);
}

export { photoList as PhotoList };
