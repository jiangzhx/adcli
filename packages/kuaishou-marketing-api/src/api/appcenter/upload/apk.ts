// Generated from github.com/bububa/kwai-marketing-api/api/appcenter/upload/apk.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { ApkRequest, ApkRequestInit } from "../../../model/appcenter/upload";

export async function apk(client: SDKClient, accessToken: string, req: ApkRequest | ApkRequestInit, signal?: AbortSignal): Promise<string> {
  const request = req instanceof ApkRequest ? req : new ApkRequest(req);
  const resp = await client.upload<{ blob_store_key?: string }>(accessToken, request, signal);
  return resp.blob_store_key ?? "";
}

export { apk as Apk };
