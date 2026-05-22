// Generated from oceanengine/ad_open_sdk_go models/model_tools_landing_group_create_v2_request.go
// Do not edit manually.

import type { ToolsLandingGroupCreateV2ExperimentSiteType, ToolsLandingGroupCreateV2GroupFlowType } from "../models/index";

export interface ToolsLandingGroupCreateV2Request {
  advertiser_id: number | string;
  experiment_site_type?: ToolsLandingGroupCreateV2ExperimentSiteType;
  group_flow_type: ToolsLandingGroupCreateV2GroupFlowType;
  group_title: string;
  site_ids?: string[];
}

