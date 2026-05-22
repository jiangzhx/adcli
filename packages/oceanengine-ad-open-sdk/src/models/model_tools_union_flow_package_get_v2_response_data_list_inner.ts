// Generated from oceanengine/ad_open_sdk_go models/model_tools_union_flow_package_get_v2_response_data_list_inner.go
// Do not edit manually.

import type { ToolsUnionFlowPackageGetV2DataListFlowPackageType, ToolsUnionFlowPackageGetV2DataListStatus } from "../models/index";

export interface ToolsUnionFlowPackageGetV2ResponseDataListInner {
  flow_package_id?: number | string;
  flow_package_type?: ToolsUnionFlowPackageGetV2DataListFlowPackageType;
  name?: string;
  rit?: number[];
  status?: ToolsUnionFlowPackageGetV2DataListStatus;
}

