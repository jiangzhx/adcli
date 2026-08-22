// Generated from github.com/bububa/kwai-marketing-api/api/dsp/creative/preview.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { PreviewRequest, PreviewRequestInit } from "../../../model/dsp/creative";

export async function preview(client: SDKClient, accessToken: string, req: PreviewRequest | PreviewRequestInit, signal?: AbortSignal): Promise<void> {
  const request = req instanceof PreviewRequest ? req : new PreviewRequest(req);
  await client.post<unknown>(accessToken, request, signal);
}

export { preview as Preview };
