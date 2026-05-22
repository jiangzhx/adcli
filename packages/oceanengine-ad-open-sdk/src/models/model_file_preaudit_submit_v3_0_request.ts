// Generated from oceanengine/ad_open_sdk_go models/model_file_preaudit_submit_v3_0_request.go
// Do not edit manually.

import type { FilePreauditSubmitV30MaterialChannel, FilePreauditSubmitV30MaterialType } from "../models/index";

export interface FilePreauditSubmitV30Request {
  advertiser_id: number | string;
  material_channel: FilePreauditSubmitV30MaterialChannel;
  material_type: FilePreauditSubmitV30MaterialType;
  video_url?: string;
}

