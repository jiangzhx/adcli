// Generated from oceanengine/ad_open_sdk_go models/model_local_file_video_upload_v3_0_request.go
// Do not edit manually.

import type { LocalFileVideoUploadV30RequestVideoFile } from "../models/index";

export interface LocalFileVideoUploadV30Request {
  filename: string;
  local_account_id: number | string;
  video_file: LocalFileVideoUploadV30RequestVideoFile;
  video_signature: string;
}

