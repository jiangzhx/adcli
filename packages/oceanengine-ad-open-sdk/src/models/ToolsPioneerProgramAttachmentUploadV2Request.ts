// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsPioneerProgramAttachmentUploadV2DataFileType, ToolsPioneerProgramAttachmentUploadV2Platform } from "../models";

export interface ToolsPioneerProgramAttachmentUploadV2Request {
  app_id: number;
  data_file_type: ToolsPioneerProgramAttachmentUploadV2DataFileType;
  debug_mode?: boolean;
  file_data: File;
  file_index: number;
  file_total_num: number;
  p_date: string;
  platform: ToolsPioneerProgramAttachmentUploadV2Platform;
}

