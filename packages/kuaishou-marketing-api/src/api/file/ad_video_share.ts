// Generated from github.com/bububa/kwai-marketing-api/api/file/ad_video_share.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { AdVideoShareRequest, AdVideoShareRequestInit, App } from "../../model/file";

export async function adVideoShare(client: SDKClient, accessToken: string, req: AdVideoShareRequest | AdVideoShareRequestInit, signal?: AbortSignal): Promise<App[]> {
  const request = req instanceof AdVideoShareRequest ? req : new AdVideoShareRequest(req);
  const resp = await client.post<{ details?: App[] }>(accessToken, request, signal);
  return resp.details ?? [];
}

export { adVideoShare as AdVideoShare };
