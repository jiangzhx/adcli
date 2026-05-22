// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsPlayableListGetV2DataListPlayableOrientation, ToolsPlayableListGetV2DataListStatus } from "../models";

export interface ToolsPlayableListGetV2ResponseDataListInner {
  advertiser_id?: number | string;
  playable_id?: number | string;
  playable_name?: string;
  playable_orientation?: ToolsPlayableListGetV2DataListPlayableOrientation;
  playable_url?: string;
  status?: ToolsPlayableListGetV2DataListStatus;
}

