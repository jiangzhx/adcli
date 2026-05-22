// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsEbpVideoUploadV30AccountType, ToolsEbpVideoUploadV30UploadType } from "../models";

export interface ToolsEbpVideoUploadV30Request {
  account_id: number;
  account_type?: ToolsEbpVideoUploadV30AccountType;
  file_name?: string;
  is_aigc?: boolean;
  labels?: string[];
  upload_type?: ToolsEbpVideoUploadV30UploadType;
  video_file?: File;
  video_signature?: string;
  video_url?: string;
}

