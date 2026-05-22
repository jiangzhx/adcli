// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsLandingGroupCreateV2ExperimentSiteType, ToolsLandingGroupCreateV2GroupFlowType } from "../models";

export interface ToolsLandingGroupCreateV2Request {
  advertiser_id: number | string;
  experiment_site_type?: ToolsLandingGroupCreateV2ExperimentSiteType;
  group_flow_type: ToolsLandingGroupCreateV2GroupFlowType;
  group_title: string;
  site_ids?: string[];
}

