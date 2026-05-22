// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsLandingGroupCreateV2DataGroupFlowType, ToolsLandingGroupCreateV2DataGroupStatus, ToolsLandingGroupCreateV2ResponseDataSitesInner } from "../models";

export interface ToolsLandingGroupCreateV2ResponseData {
  group_flow_type?: ToolsLandingGroupCreateV2DataGroupFlowType;
  group_id?: string;
  group_status?: ToolsLandingGroupCreateV2DataGroupStatus;
  group_title?: string;
  group_url?: string;
  sites?: ToolsLandingGroupCreateV2ResponseDataSitesInner[];
}

