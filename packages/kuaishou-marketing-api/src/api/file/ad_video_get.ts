// Generated from github.com/bububa/kwai-marketing-api/api/file/ad_video_get.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { AdVideoGetRequest, AdVideoGetRequestInit, Video } from "../../model/file";

export async function adVideoGet(client: SDKClient, accessToken: string, req: AdVideoGetRequest | AdVideoGetRequestInit, signal?: AbortSignal): Promise<Video[]> {
  const request = req instanceof AdVideoGetRequest ? req : new AdVideoGetRequest(req);
  return client.post<Video[]>(accessToken, request, signal);
}

export { adVideoGet as AdVideoGet };
