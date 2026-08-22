// Generated from github.com/bububa/kwai-marketing-api/api/file/ad_video_relate_creatives.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { AdVideoRelateCreativesRequest, AdVideoRelateCreativesRequestInit, AdVideoRelatedCreatives } from "../../model/file";

export async function adVideoRelateCreatives(client: SDKClient, accessToken: string, req: AdVideoRelateCreativesRequest | AdVideoRelateCreativesRequestInit, signal?: AbortSignal): Promise<AdVideoRelatedCreatives[]> {
  const request = req instanceof AdVideoRelateCreativesRequest ? req : new AdVideoRelateCreativesRequest(req);
  const resp = await client.post<{ related_creatives?: AdVideoRelatedCreatives[] }>(accessToken, request, signal);
  return resp.related_creatives ?? [];
}

export { adVideoRelateCreatives as AdVideoRelateCreatives };
