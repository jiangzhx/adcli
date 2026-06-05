// 由 oceanengine/ad_open_sdk_go models/model_tools_app_management_extend_package_update_v2_request.go 生成
// 不要手动编辑。

import type { ToolsAppManagementExtendPackageUpdateV2Mode, ToolsAppManagementExtendPackageUpdateV2RequestChannelListInner } from "../models/index";

export interface ToolsAppManagementExtendPackageUpdateV2Request {
  advertiser_id: number | string;
  channel_list?: ToolsAppManagementExtendPackageUpdateV2RequestChannelListInner[];
  mode?: ToolsAppManagementExtendPackageUpdateV2Mode;
  package_id: string;
}

