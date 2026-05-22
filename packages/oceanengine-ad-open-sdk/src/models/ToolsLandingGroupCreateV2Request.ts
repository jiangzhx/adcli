// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { ToolsLandingGroupCreateV2ExperimentSiteType, ToolsLandingGroupCreateV2GroupFlowType } from "../models";

export interface ToolsLandingGroupCreateV2Request {
  advertiser_id: number;
  experiment_site_type?: ToolsLandingGroupCreateV2ExperimentSiteType;
  group_flow_type: ToolsLandingGroupCreateV2GroupFlowType;
  group_title: string;
  site_ids?: string[];
}

