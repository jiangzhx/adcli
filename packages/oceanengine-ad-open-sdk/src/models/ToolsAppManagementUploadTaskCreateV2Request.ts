// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsAppManagementUploadTaskCreateV2AccountType, ToolsAppManagementUploadTaskCreateV2FileType } from "../models";

export interface ToolsAppManagementUploadTaskCreateV2Request {
  account_id: number;
  account_type: ToolsAppManagementUploadTaskCreateV2AccountType;
  download_url: string;
  file_type: ToolsAppManagementUploadTaskCreateV2FileType;
  md5: string;
}

