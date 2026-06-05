// 由 oceanengine/ad_open_sdk_go models/model_tools_micro_game_update_v3_0_request_game_link_inner.go 生成
// 不要手动编辑。

import type { ToolsMicroGameUpdateV30GameLinkOperateType } from "../models/index";

export interface ToolsMicroGameUpdateV30RequestGameLinkInner {
  id?: number | string;
  link: string;
  operate_type: ToolsMicroGameUpdateV30GameLinkOperateType;
  remark: string;
  start_param?: string;
}

