// Generated from oceanengine/ad_open_sdk_go models/model_local_image_upload_v3_0_request.go
// Do not edit manually.

import type { LocalImageUploadV30UploadType } from "../models/index";

export interface LocalImageUploadV30Request {
  image_file?: Blob;
  image_signature?: string;
  is_aigc?: boolean;
  local_account_id: number | string;
  upload_type?: LocalImageUploadV30UploadType;
}

