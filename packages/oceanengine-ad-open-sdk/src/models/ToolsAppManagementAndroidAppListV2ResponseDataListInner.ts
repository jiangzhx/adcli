// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsAppManagementAndroidAppListV2DataListAccountType, ToolsAppManagementAndroidAppListV2DataListHistoryAccountType } from "../models";

export interface ToolsAppManagementAndroidAppListV2ResponseDataListInner {
  account_id?: number | string;
  account_type?: ToolsAppManagementAndroidAppListV2DataListAccountType;
  app_cloud_id?: number | string;
  app_name?: string;
  create_time?: string;
  download_url?: string;
  history_account_id?: number | string;
  history_account_type?: ToolsAppManagementAndroidAppListV2DataListHistoryAccountType;
  icon_url?: string;
  is_ebp_asset?: boolean;
  package_id?: string;
  package_name?: string;
  publish_time?: string;
  update_time?: string;
  version?: string;
}

