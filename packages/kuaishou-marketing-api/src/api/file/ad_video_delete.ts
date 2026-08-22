// Generated from github.com/bububa/kwai-marketing-api/api/file/ad_video_delete.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { AdVideoDeleteRequest, AdVideoDeleteRequestInit } from "../../model/file";

export async function adVideoDelete(client: SDKClient, accessToken: string, req: AdVideoDeleteRequest | AdVideoDeleteRequestInit, signal?: AbortSignal): Promise<string[]> {
  const request = req instanceof AdVideoDeleteRequest ? req : new AdVideoDeleteRequest(req);
  return client.post<string[]>(accessToken, request, signal);
}

export { adVideoDelete as AdVideoDelete };
