// Generated from github.com/bububa/kwai-marketing-api/api/file/ad_image_upload_v1.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { AdImageUploadRequestV1, AdImageUploadRequestV1Init, Image } from "../../model/file";

export async function adImageUploadV1(client: SDKClient, accessToken: string, req: AdImageUploadRequestV1 | AdImageUploadRequestV1Init, signal?: AbortSignal): Promise<Image> {
  const request = req instanceof AdImageUploadRequestV1 ? req : new AdImageUploadRequestV1(req);
  return client.upload<Image>(accessToken, request, signal);
}

export { adImageUploadV1 as AdImageUploadV1 };
