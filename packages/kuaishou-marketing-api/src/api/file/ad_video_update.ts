// Generated from github.com/bububa/kwai-marketing-api/api/file/ad_video_update.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { AdVideoUpdateRequest, AdVideoUpdateRequestInit } from "../../model/file";

export async function adVideoUpdate(client: SDKClient, accessToken: string, req: AdVideoUpdateRequest | AdVideoUpdateRequestInit, signal?: AbortSignal): Promise<string[]> {
  const request = req instanceof AdVideoUpdateRequest ? req : new AdVideoUpdateRequest(req);
  return client.post<string[]>(accessToken, request, signal);
}

export { adVideoUpdate as AdVideoUpdate };
