// 由 oceanengine/ad_open_sdk_go models/model_tools_joint_bid_get_v3_0_response_data.go 生成
// 不要手动编辑。

import type { ToolsJointBidGetV30DataJointBidMode, ToolsJointBidGetV30ResponseDataJointScopeInfo } from "../models/index";

export interface ToolsJointBidGetV30ResponseData {
  joint_bid_mode?: ToolsJointBidGetV30DataJointBidMode;
  joint_id?: number | string;
  joint_scope_info?: ToolsJointBidGetV30ResponseDataJointScopeInfo;
  rta_id?: (number | string)[];
}

