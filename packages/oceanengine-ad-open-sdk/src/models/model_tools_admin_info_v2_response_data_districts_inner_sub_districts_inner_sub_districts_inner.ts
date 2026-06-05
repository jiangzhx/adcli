// 由 oceanengine/ad_open_sdk_go models/model_tools_admin_info_v2_response_data_districts_inner_sub_districts_inner_sub_districts_inner.go 生成
// 不要手动编辑。

import type { ToolsAdminInfoV2DataDistrictsSubDistrictsSubDistrictsLevel, ToolsAdminInfoV2ResponseDataDistrictsInnerSubDistrictsInnerSubDistrictsInnerSubDistrictsInner } from "../models/index";

export interface ToolsAdminInfoV2ResponseDataDistrictsInnerSubDistrictsInnerSubDistrictsInner {
  code?: string;
  geoname_id?: number | string;
  level?: ToolsAdminInfoV2DataDistrictsSubDistrictsSubDistrictsLevel;
  name?: string;
  sub_districts?: ToolsAdminInfoV2ResponseDataDistrictsInnerSubDistrictsInnerSubDistrictsInnerSubDistrictsInner[];
}

