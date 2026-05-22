// Generated from oceanengine/ad_open_sdk_go models/model_tools_ebp_video_upload_v3_0_request.go
// Do not edit manually.

import type { ToolsEbpVideoUploadV30AccountType, ToolsEbpVideoUploadV30UploadType } from "../models/index";

export interface ToolsEbpVideoUploadV30Request {
  account_id: number | string;
  account_type?: ToolsEbpVideoUploadV30AccountType;
  file_name?: string;
  is_aigc?: boolean;
  labels?: string[];
  upload_type?: ToolsEbpVideoUploadV30UploadType;
  video_file?: Blob;
  video_signature?: string;
  video_url?: string;
}

