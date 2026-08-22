// Generated from github.com/bububa/kwai-marketing-api/api/file/upload_atlas_photo.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { UploadAtlasPhotoRequest, UploadAtlasPhotoRequestInit } from "../../model/file";

export async function uploadAtlasPhoto(client: SDKClient, accessToken: string, req: UploadAtlasPhotoRequest | UploadAtlasPhotoRequestInit, signal?: AbortSignal): Promise<string> {
  const request = req instanceof UploadAtlasPhotoRequest ? req : new UploadAtlasPhotoRequest(req);
  return client.post<string>(accessToken, request, signal);
}

export { uploadAtlasPhoto as UploadAtlasPhoto };
