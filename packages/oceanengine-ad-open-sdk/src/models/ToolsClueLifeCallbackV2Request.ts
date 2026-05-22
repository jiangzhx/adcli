// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsClueLifeCallbackV2ClueConvertState, ToolsClueLifeCallbackV2RequestEventData } from "../models";

export interface ToolsClueLifeCallbackV2Request {
  clue_convert_state: ToolsClueLifeCallbackV2ClueConvertState;
  clue_id: string;
  event_data?: ToolsClueLifeCallbackV2RequestEventData;
  local_account_ids: string[];
}

