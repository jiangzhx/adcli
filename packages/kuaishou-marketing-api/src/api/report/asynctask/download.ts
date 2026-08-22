// Generated from github.com/bububa/kwai-marketing-api/api/report/asynctask/download.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { DownloadRequest, DownloadRequestInit, Uint8Array } from "../../../model/report/asynctask";

export async function download(client: SDKClient, accessToken: string, req: DownloadRequest | DownloadRequestInit, signal?: AbortSignal): Promise<Uint8Array> {
  const request = req instanceof DownloadRequest ? req : new DownloadRequest(req);
  return client.post<Uint8Array>(accessToken, request, signal);
}

export { download as Download };
