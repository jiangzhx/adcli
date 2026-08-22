// Generated from github.com/bububa/kwai-marketing-api/api/file/ad_image_get.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { AdImageGetRequest, AdImageGetRequestInit, Image } from "../../model/file";

export async function adImageGet(client: SDKClient, accessToken: string, req: AdImageGetRequest | AdImageGetRequestInit, signal?: AbortSignal): Promise<Image> {
  const request = req instanceof AdImageGetRequest ? req : new AdImageGetRequest(req);
  return client.get<Image>(accessToken, request, signal);
}

export { adImageGet as AdImageGet };
