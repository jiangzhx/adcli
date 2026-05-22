// Generated from oceanengine/ad_open_sdk_go models/model_tools_rubeex_playable_list_v2_response_data_list_inner.go
// Do not edit manually.

import type { ToolsRubeexPlayableListV2DataListAdStatus, ToolsRubeexPlayableListV2DataListPlayableOrientation, ToolsRubeexPlayableListV2DataListStatus } from "../models/index";

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

