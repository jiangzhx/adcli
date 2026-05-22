// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsAppManagementExtendPackageCreateV2V2AccountType, ToolsAppManagementExtendPackageCreateV2V2Mode, ToolsAppManagementExtendPackageCreateV2V2RequestChannelListInner } from "../models";

export interface ToolsAppManagementExtendPackageCreateV2V2Request {
  account_id: number | string;
  account_type: ToolsAppManagementExtendPackageCreateV2V2AccountType;
  channel_count?: number;
  channel_list?: ToolsAppManagementExtendPackageCreateV2V2RequestChannelListInner[];
  mode: ToolsAppManagementExtendPackageCreateV2V2Mode;
  package_id: string;
}

