// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsClueExtInfoCallbackV2ClueEvent, ToolsClueExtInfoCallbackV2ExtKey } from "../models";

export interface ToolsClueExtInfoCallbackV2Request {
  advertiser_id: number;
  callback_time: number;
  clue_event?: ToolsClueExtInfoCallbackV2ClueEvent;
  clue_id: number;
  ext_key: ToolsClueExtInfoCallbackV2ExtKey;
  ext_value: string;
  ext_value_detail?: string[];
}

