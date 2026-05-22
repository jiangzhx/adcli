// Generated from oceanengine/ad_open_sdk_go models/model_tools_app_management_upload_task_create_v2_request.go
// Do not edit manually.

import type { ToolsAppManagementUploadTaskCreateV2AccountType, ToolsAppManagementUploadTaskCreateV2FileType } from "../models/index";

export interface ToolsAppManagementUploadTaskCreateV2Request {
  account_id: number | string;
  account_type: ToolsAppManagementUploadTaskCreateV2AccountType;
  download_url: string;
  file_type: ToolsAppManagementUploadTaskCreateV2FileType;
  md5: string;
}

