// 由 oceanengine/ad_open_sdk_go models/model_tools_joint_bid_update_v3_0_request.go 生成
// 不要手动编辑。

import type { ToolsJointBidUpdateV30RequestJointScopeInfo } from "../models/index";

export interface ToolsJointBidUpdateV30Request {
  advertiser_id: number | string;
  joint_scope_info?: ToolsJointBidUpdateV30RequestJointScopeInfo;
  rta_id?: (number | string)[];
}

