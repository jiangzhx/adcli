// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsClueCallbackV2RequestEventData } from "../models";

export interface ToolsClueCallbackV2Request {
  advertiser_ids: number[];
  click_id?: string;
  clue_convert_state: number;
  clue_id?: string;
  event_data?: ToolsClueCallbackV2RequestEventData;
  source: number;
  source_type?: number;
}

