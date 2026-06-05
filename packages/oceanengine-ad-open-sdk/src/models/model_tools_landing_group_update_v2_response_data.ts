// 由 oceanengine/ad_open_sdk_go models/model_tools_landing_group_update_v2_response_data.go 生成
// 不要手动编辑。

import type { ToolsLandingGroupUpdateV2ResponseDataSitesInner } from "../models/index";

export interface ToolsLandingGroupUpdateV2ResponseData {
  group_flow_type?: string;
  group_id?: string;
  group_status?: string;
  group_title?: string;
  group_url?: string;
  sites?: ToolsLandingGroupUpdateV2ResponseDataSitesInner[];
}

