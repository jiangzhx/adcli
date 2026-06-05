// 由 oceanengine/ad_open_sdk_go models/model_tools_blue_flow_package_list_v3_0_response_data_blue_flow_packages_inner.go 生成
// 不要手动编辑。

import type { ToolsBlueFlowPackageListV30ResponseDataBlueFlowPackagesInnerBlueFlowKeywordInner } from "../models/index";

export interface ToolsBlueFlowPackageListV30ResponseDataBlueFlowPackagesInner {
  blue_flow_keyword?: ToolsBlueFlowPackageListV30ResponseDataBlueFlowPackagesInnerBlueFlowKeywordInner[];
  blue_flow_package_id?: number | string;
  blue_flow_package_name?: string;
  estimated_cost_range?: number[];
  estimated_reach_traffic_range?: number[];
  flow_coverage_ratio?: string;
  suggested_bid_range?: number[];
}

