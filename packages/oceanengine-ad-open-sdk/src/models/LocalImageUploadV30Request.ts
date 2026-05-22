// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { LocalImageUploadV30UploadType } from "../models";

export interface LocalImageUploadV30Request {
  image_file?: File;
  image_signature?: string;
  is_aigc?: boolean;
  local_account_id: number;
  upload_type?: LocalImageUploadV30UploadType;
}

