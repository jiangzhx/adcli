// Generated from github.com/bububa/kwai-marketing-api/api/file/ad_video_upload_v1.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { AdVideoUploadRequestV1, AdVideoUploadRequestV1Init } from "../../model/file";

export async function adVideoUploadV1(client: SDKClient, accessToken: string, req: AdVideoUploadRequestV1 | AdVideoUploadRequestV1Init, signal?: AbortSignal): Promise<string> {
  const request = req instanceof AdVideoUploadRequestV1 ? req : new AdVideoUploadRequestV1(req);
  const resp = await client.upload<{ photo_id?: string }>(accessToken, request, signal);
  return resp.photo_id ?? "";
}

export { adVideoUploadV1 as AdVideoUploadV1 };
