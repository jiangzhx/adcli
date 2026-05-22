// Generated from oceanengine/ad_open_sdk_go models/model_file_video_ad_v2_request.go
// Do not edit manually.

import type { FileVideoAdV2UploadType } from "../models/index";

export interface FileVideoAdV2Request {
  advertiser_id: number | string;
  filename?: string;
  is_aigc?: boolean;
  is_guide_video?: boolean;
  labels?: string[];
  upload_type?: FileVideoAdV2UploadType;
  video_file?: Blob;
  video_signature?: string;
  video_url?: string;
}

