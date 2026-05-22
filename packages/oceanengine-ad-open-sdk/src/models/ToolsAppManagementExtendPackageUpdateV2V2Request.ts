// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsAppManagementExtendPackageUpdateV2V2AccountType, ToolsAppManagementExtendPackageUpdateV2V2Mode, ToolsAppManagementExtendPackageUpdateV2V2RequestChannelInfoListInner } from "../models";

export interface ToolsAppManagementExtendPackageUpdateV2V2Request {
  account_id: number;
  account_type: ToolsAppManagementExtendPackageUpdateV2V2AccountType;
  channel_info_list?: ToolsAppManagementExtendPackageUpdateV2V2RequestChannelInfoListInner[];
  mode: ToolsAppManagementExtendPackageUpdateV2V2Mode;
  package_id: string;
}

