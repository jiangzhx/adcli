// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { ToolsAppManagementExtendPackageUpdateV2Mode, ToolsAppManagementExtendPackageUpdateV2RequestChannelListInner } from "../models";

export interface ToolsAppManagementExtendPackageUpdateV2Request {
  advertiser_id: number;
  channel_list?: ToolsAppManagementExtendPackageUpdateV2RequestChannelListInner[];
  mode?: ToolsAppManagementExtendPackageUpdateV2Mode;
  package_id: string;
}

