// Generated from github.com/bububa/kwai-marketing-api/api/native/upload.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { UploadRequest, UploadRequestInit, UploadResponse } from "../../model/native";

export async function upload(client: SDKClient, accessToken: string, req: UploadRequest | UploadRequestInit, signal?: AbortSignal): Promise<UploadResponse> {
  const request = req instanceof UploadRequest ? req : new UploadRequest(req);
  return client.upload<UploadResponse>(accessToken, request, signal);
}

export { upload as Upload };
