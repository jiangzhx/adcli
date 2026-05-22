// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { FileImageAdV2UploadType } from "../models";

export interface FileImageAdV2Request {
  advertiser_id: number | string;
  filename?: string;
  image_file?: File;
  image_signature?: string;
  image_url?: string;
  is_aigc?: boolean;
  upload_type?: FileImageAdV2UploadType;
}

