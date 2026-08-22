// Generated from github.com/bububa/kwai-marketing-api/api/file/ad_image_upload_v2.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { AdImageUploadRequestV2, AdImageUploadRequestV2Init, Image } from "../../model/file";

export async function adImageUploadV2(client: SDKClient, accessToken: string, req: AdImageUploadRequestV2 | AdImageUploadRequestV2Init, signal?: AbortSignal): Promise<Image> {
  const request = req instanceof AdImageUploadRequestV2 ? req : new AdImageUploadRequestV2(req);
  return client.upload<Image>(accessToken, request, signal);
}

export { adImageUploadV2 as AdImageUploadV2 };
