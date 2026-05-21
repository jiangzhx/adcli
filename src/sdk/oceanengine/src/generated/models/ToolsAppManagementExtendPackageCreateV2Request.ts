// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { ToolsAppManagementExtendPackageCreateV2Mode, ToolsAppManagementExtendPackageCreateV2RequestChannelListInner } from "../models";

export interface ToolsAppManagementExtendPackageCreateV2Request {
  advertiser_id: number;
  channel_count?: number;
  channel_list?: ToolsAppManagementExtendPackageCreateV2RequestChannelListInner[];
  mode?: ToolsAppManagementExtendPackageCreateV2Mode;
  package_id: string;
}

