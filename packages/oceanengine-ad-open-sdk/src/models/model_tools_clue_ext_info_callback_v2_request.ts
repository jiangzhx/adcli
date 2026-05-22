// Generated from oceanengine/ad_open_sdk_go models/model_tools_clue_ext_info_callback_v2_request.go
// Do not edit manually.

import type { ToolsClueExtInfoCallbackV2ClueEvent, ToolsClueExtInfoCallbackV2ExtKey } from "../models/index";

export interface ToolsClueExtInfoCallbackV2Request {
  advertiser_id: number | string;
  callback_time: number;
  clue_event?: ToolsClueExtInfoCallbackV2ClueEvent;
  clue_id: number | string;
  ext_key: ToolsClueExtInfoCallbackV2ExtKey;
  ext_value: string;
  ext_value_detail?: string[];
}

