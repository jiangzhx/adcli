// Generated from oceanengine/ad_open_sdk_go models/model_tools_admin_info_v2_response_data_districts_inner.go
// Do not edit manually.

import type { ToolsAdminInfoV2DataDistrictsLevel, ToolsAdminInfoV2ResponseDataDistrictsInnerSubDistrictsInner } from "../models/index";

export interface ToolsAdminInfoV2ResponseDataDistrictsInner {
  code?: string;
  geoname_id?: number | string;
  level?: ToolsAdminInfoV2DataDistrictsLevel;
  name?: string;
  sub_districts?: ToolsAdminInfoV2ResponseDataDistrictsInnerSubDistrictsInner[];
}

