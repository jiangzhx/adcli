// Generated from github.com/bububa/kwai-marketing-api/api/file/ad_video_upload_v2.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { AdVideoUploadRequestV2, AdVideoUploadRequestV2Init, Video } from "../../model/file";

export async function adVideoUploadV2(client: SDKClient, accessToken: string, req: AdVideoUploadRequestV2 | AdVideoUploadRequestV2Init, signal?: AbortSignal): Promise<Video> {
  const request = req instanceof AdVideoUploadRequestV2 ? req : new AdVideoUploadRequestV2(req);
  return client.upload<Video>(accessToken, request, signal);
}

export { adVideoUploadV2 as AdVideoUploadV2 };
