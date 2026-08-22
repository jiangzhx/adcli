// Generated from github.com/bububa/kwai-marketing-api/api/file/ad_video_tag_delete.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { AdVideoTagDeleteRequest, AdVideoTagDeleteRequestInit } from "../../model/file";

export async function adVideoTagDelete(client: SDKClient, accessToken: string, req: AdVideoTagDeleteRequest | AdVideoTagDeleteRequestInit, signal?: AbortSignal): Promise<void> {
  const request = req instanceof AdVideoTagDeleteRequest ? req : new AdVideoTagDeleteRequest(req);
  await client.post<unknown>(accessToken, request, signal);
}

export { adVideoTagDelete as AdVideoTagDelete };
