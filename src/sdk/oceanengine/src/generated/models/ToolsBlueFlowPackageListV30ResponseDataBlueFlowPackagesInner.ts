// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { ToolsBlueFlowPackageListV30ResponseDataBlueFlowPackagesInnerBlueFlowKeywordInner } from "../models";

export interface ToolsBlueFlowPackageListV30ResponseDataBlueFlowPackagesInner {
  blue_flow_keyword?: ToolsBlueFlowPackageListV30ResponseDataBlueFlowPackagesInnerBlueFlowKeywordInner[];
  blue_flow_package_id?: number;
  blue_flow_package_name?: string;
  estimated_cost_range?: number[];
  estimated_reach_traffic_range?: number[];
  flow_coverage_ratio?: string;
  suggested_bid_range?: number[];
}

