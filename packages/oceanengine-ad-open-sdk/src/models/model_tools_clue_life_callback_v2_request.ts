// 由 oceanengine/ad_open_sdk_go models/model_tools_clue_life_callback_v2_request.go 生成
// 不要手动编辑。

import type { ToolsClueLifeCallbackV2ClueConvertState, ToolsClueLifeCallbackV2RequestEventData } from "../models/index";

export interface ToolsClueLifeCallbackV2Request {
  clue_convert_state: ToolsClueLifeCallbackV2ClueConvertState;
  clue_id: string;
  event_data?: ToolsClueLifeCallbackV2RequestEventData;
  local_account_ids: string[];
}

