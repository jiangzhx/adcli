// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { FileVideoAdV2UploadType } from "../models";

export interface FileVideoAdV2Request {
  advertiser_id: number | string;
  filename?: string;
  is_aigc?: boolean;
  is_guide_video?: boolean;
  labels?: string[];
  upload_type?: FileVideoAdV2UploadType;
  video_file?: File;
  video_signature?: string;
  video_url?: string;
}

