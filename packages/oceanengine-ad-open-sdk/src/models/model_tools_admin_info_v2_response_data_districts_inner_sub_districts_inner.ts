// 由 oceanengine/ad_open_sdk_go models/model_tools_admin_info_v2_response_data_districts_inner_sub_districts_inner.go 生成
// 不要手动编辑。

import type { ToolsAdminInfoV2DataDistrictsSubDistrictsLevel, ToolsAdminInfoV2ResponseDataDistrictsInnerSubDistrictsInnerSubDistrictsInner } from "../models/index";

export interface ToolsAdminInfoV2ResponseDataDistrictsInnerSubDistrictsInner {
  code?: string;
  geoname_id?: number | string;
  level?: ToolsAdminInfoV2DataDistrictsSubDistrictsLevel;
  name?: string;
  sub_districts?: ToolsAdminInfoV2ResponseDataDistrictsInnerSubDistrictsInnerSubDistrictsInner[];
}

