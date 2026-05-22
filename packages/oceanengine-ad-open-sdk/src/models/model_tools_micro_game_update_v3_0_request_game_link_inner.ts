// Generated from oceanengine/ad_open_sdk_go models/model_tools_micro_game_update_v3_0_request_game_link_inner.go
// Do not edit manually.

import type { ToolsMicroGameUpdateV30GameLinkOperateType } from "../models/index";

export interface ToolsMicroGameUpdateV30RequestGameLinkInner {
  id?: number | string;
  link: string;
  operate_type: ToolsMicroGameUpdateV30GameLinkOperateType;
  remark: string;
  start_param?: string;
}

