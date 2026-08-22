// Generated from github.com/bububa/kwai-marketing-api/api/file/ad_video_share_new.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { AdVideoShareNewRequest, AdVideoShareNewRequestInit, AdVideoShareNewResponse } from "../../model/file";

export async function adVideoShareNew(client: SDKClient, accessToken: string, req: AdVideoShareNewRequest | AdVideoShareNewRequestInit, signal?: AbortSignal): Promise<AdVideoShareNewResponse> {
  const request = req instanceof AdVideoShareNewRequest ? req : new AdVideoShareNewRequest(req);
  return client.post<AdVideoShareNewResponse>(accessToken, request, signal);
}

export { adVideoShareNew as AdVideoShareNew };
