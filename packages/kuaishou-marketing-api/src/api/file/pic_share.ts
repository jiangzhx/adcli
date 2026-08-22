// Generated from github.com/bububa/kwai-marketing-api/api/file/pic_share.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { PicShareRequest, PicShareRequestInit, App } from "../../model/file";

export async function picShare(client: SDKClient, accessToken: string, req: PicShareRequest | PicShareRequestInit, signal?: AbortSignal): Promise<App[]> {
  const request = req instanceof PicShareRequest ? req : new PicShareRequest(req);
  const resp = await client.post<{ details?: App[] }>(accessToken, request, signal);
  return resp.details ?? [];
}

export { picShare as PicShare };
