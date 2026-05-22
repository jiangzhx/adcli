// Generated from oceanengine/ad_open_sdk_go models/model_tools_app_management_extend_package_create_v2_request.go
// Do not edit manually.

import type { ToolsAppManagementExtendPackageCreateV2Mode, ToolsAppManagementExtendPackageCreateV2RequestChannelListInner } from "../models/index";

export interface ToolsAppManagementExtendPackageCreateV2Request {
  advertiser_id: number | string;
  channel_count?: number;
  channel_list?: ToolsAppManagementExtendPackageCreateV2RequestChannelListInner[];
  mode?: ToolsAppManagementExtendPackageCreateV2Mode;
  package_id: string;
}

