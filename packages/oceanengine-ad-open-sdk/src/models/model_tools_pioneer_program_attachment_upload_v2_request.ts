// Generated from oceanengine/ad_open_sdk_go models/model_tools_pioneer_program_attachment_upload_v2_request.go
// Do not edit manually.

import type { ToolsPioneerProgramAttachmentUploadV2DataFileType, ToolsPioneerProgramAttachmentUploadV2Platform } from "../models/index";

export interface ToolsPioneerProgramAttachmentUploadV2Request {
  app_id: number | string;
  data_file_type: ToolsPioneerProgramAttachmentUploadV2DataFileType;
  debug_mode?: boolean;
  file_data: Blob;
  file_index: number;
  file_total_num: number;
  p_date: string;
  platform: ToolsPioneerProgramAttachmentUploadV2Platform;
}

