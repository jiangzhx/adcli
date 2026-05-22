// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsLandingGroupGetV2DataListGroupFlowType, ToolsLandingGroupGetV2DataListGroupStatus, ToolsLandingGroupGetV2ResponseDataListInnerSitesInner } from "../models";

export interface ToolsLandingGroupGetV2ResponseDataListInner {
  group_flow_type?: ToolsLandingGroupGetV2DataListGroupFlowType;
  group_id?: number;
  group_status?: ToolsLandingGroupGetV2DataListGroupStatus;
  group_title?: string;
  group_url?: string;
  sites?: ToolsLandingGroupGetV2ResponseDataListInnerSitesInner[];
}

