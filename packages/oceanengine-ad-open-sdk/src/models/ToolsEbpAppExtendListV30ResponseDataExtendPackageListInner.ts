// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsEbpAppExtendListV30DataExtendPackageListStatus } from "../models";

export interface ToolsEbpAppExtendListV30ResponseDataExtendPackageListInner {
  channel_id?: string;
  current_version?: string;
  customize_download_url?: string;
  download_url?: string;
  md5?: string;
  package_id?: string;
  reason?: string;
  remark?: string;
  status?: ToolsEbpAppExtendListV30DataExtendPackageListStatus;
  update_time?: number;
  version_name?: string;
}

