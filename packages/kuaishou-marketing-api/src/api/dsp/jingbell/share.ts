// Generated from github.com/bububa/kwai-marketing-api/api/dsp/jingbell/share.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { ShareRequest, ShareRequestInit } from "../../../model/dsp/jingbell";

export async function share(client: SDKClient, accessToken: string, req: ShareRequest | ShareRequestInit, signal?: AbortSignal): Promise<void> {
  const request = req instanceof ShareRequest ? req : new ShareRequest(req);
  await client.post<unknown>(accessToken, request, signal);
}

export { share as Share };
