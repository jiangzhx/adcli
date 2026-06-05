// 由 oceanengine/ad_open_sdk_go models/model_tools_joint_bid_create_v3_0_request.go 生成
// 不要手动编辑。

import type { ToolsJointBidCreateV30JointBidMode, ToolsJointBidCreateV30RequestJointScopeInfo } from "../models/index";

export interface ToolsJointBidCreateV30Request {
  advertiser_id: number | string;
  joint_bid_mode: ToolsJointBidCreateV30JointBidMode;
  joint_scope_info?: ToolsJointBidCreateV30RequestJointScopeInfo;
  rta_id: (number | string)[];
}

