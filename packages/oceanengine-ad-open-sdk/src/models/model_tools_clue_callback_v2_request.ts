// Generated from oceanengine/ad_open_sdk_go models/model_tools_clue_callback_v2_request.go
// Do not edit manually.

import type { ToolsClueCallbackV2RequestEventData } from "../models/index";

export interface ToolsClueCallbackV2Request {
  advertiser_ids: number | string[];
  click_id?: string;
  clue_convert_state: number;
  clue_id?: string;
  event_data?: ToolsClueCallbackV2RequestEventData;
  source: number;
  source_type?: number;
}

