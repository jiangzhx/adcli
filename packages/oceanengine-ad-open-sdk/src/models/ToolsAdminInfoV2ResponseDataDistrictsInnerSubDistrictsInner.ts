// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsAdminInfoV2DataDistrictsSubDistrictsLevel, ToolsAdminInfoV2ResponseDataDistrictsInnerSubDistrictsInnerSubDistrictsInner } from "../models";

export interface ToolsAdminInfoV2ResponseDataDistrictsInnerSubDistrictsInner {
  code?: string;
  geoname_id?: number;
  level?: ToolsAdminInfoV2DataDistrictsSubDistrictsLevel;
  name?: string;
  sub_districts?: ToolsAdminInfoV2ResponseDataDistrictsInnerSubDistrictsInnerSubDistrictsInner[];
}

