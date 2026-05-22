// Generated from oceanengine/ad_open_sdk_go models/model_file_image_ad_v2_request.go
// Do not edit manually.

import type { FileImageAdV2UploadType } from "../models/index";

export interface FileImageAdV2Request {
  advertiser_id: number | string;
  filename?: string;
  image_file?: Blob;
  image_signature?: string;
  image_url?: string;
  is_aigc?: boolean;
  upload_type?: FileImageAdV2UploadType;
}

