// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { LocalFileVideoUploadV30RequestVideoFile } from "../models";

export interface LocalFileVideoUploadV30Request {
  filename: string;
  local_account_id: number | string;
  video_file: LocalFileVideoUploadV30RequestVideoFile;
  video_signature: string;
}

