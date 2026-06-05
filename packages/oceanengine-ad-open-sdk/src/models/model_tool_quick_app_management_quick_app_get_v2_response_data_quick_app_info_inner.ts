// 由 oceanengine/ad_open_sdk_go models/model_tool_quick_app_management_quick_app_get_v2_response_data_quick_app_info_inner.go 生成
// 不要手动编辑。

import type { ToolQuickAppManagementQuickAppGetV2DataQuickAppInfoStatus } from "../models/index";

export interface ToolQuickAppManagementQuickAppGetV2ResponseDataQuickAppInfoInner {
  create_time: string;
  homepage_url: string;
  name: string;
  package_name: string;
  quick_app_id: number | string;
  status: ToolQuickAppManagementQuickAppGetV2DataQuickAppInfoStatus;
  update_time: string;
}

