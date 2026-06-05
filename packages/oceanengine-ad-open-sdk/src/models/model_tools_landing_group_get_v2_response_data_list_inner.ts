// 由 oceanengine/ad_open_sdk_go models/model_tools_landing_group_get_v2_response_data_list_inner.go 生成
// 不要手动编辑。

import type { ToolsLandingGroupGetV2DataListGroupFlowType, ToolsLandingGroupGetV2DataListGroupStatus, ToolsLandingGroupGetV2ResponseDataListInnerSitesInner } from "../models/index";

export interface ToolsLandingGroupGetV2ResponseDataListInner {
  group_flow_type?: ToolsLandingGroupGetV2DataListGroupFlowType;
  group_id?: number | string;
  group_status?: ToolsLandingGroupGetV2DataListGroupStatus;
  group_title?: string;
  group_url?: string;
  sites?: ToolsLandingGroupGetV2ResponseDataListInnerSitesInner[];
}

