// Generated from github.com/bububa/kwai-marketing-api/api/appcenter/upload/pic.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { PicRequest, PicRequestInit } from "../../../model/appcenter/upload";

export async function pic(client: SDKClient, accessToken: string, req: PicRequest | PicRequestInit, signal?: AbortSignal): Promise<string> {
  const request = req instanceof PicRequest ? req : new PicRequest(req);
  const resp = await client.upload<{ url?: string }>(accessToken, request, signal);
  return resp.url ?? "";
}

export { pic as Pic };
