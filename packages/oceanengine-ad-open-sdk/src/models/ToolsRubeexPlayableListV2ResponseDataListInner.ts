// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsRubeexPlayableListV2DataListAdStatus, ToolsRubeexPlayableListV2DataListPlayableOrientation, ToolsRubeexPlayableListV2DataListStatus } from "../models";

export interface ToolsRubeexPlayableListV2ResponseDataListInner {
  ad_status?: ToolsRubeexPlayableListV2DataListAdStatus;
  data_md5?: string;
  playable_id?: number | string;
  playable_name?: string;
  playable_orientation?: ToolsRubeexPlayableListV2DataListPlayableOrientation;
  playable_url?: string;
  preview_url?: string;
  status?: ToolsRubeexPlayableListV2DataListStatus;
}

