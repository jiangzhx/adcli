// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { FileImageAdvertiserV2UploadTo, FileImageAdvertiserV2UploadType } from "../models";

export interface FileImageAdvertiserV2Request {
  advertiser_id: number | string;
  image_file?: File;
  image_signature?: string;
  image_url?: string;
  upload_to: FileImageAdvertiserV2UploadTo;
  upload_type?: FileImageAdvertiserV2UploadType;
}

