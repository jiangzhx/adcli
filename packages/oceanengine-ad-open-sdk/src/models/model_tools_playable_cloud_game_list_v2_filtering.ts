// Generated from oceanengine/ad_open_sdk_go models/model_tools_playable_cloud_game_list_v2_filtering.go
// Do not edit manually.

import type { ToolsPlayableCloudGameListV2FilteringAdStatus, ToolsPlayableCloudGameListV2FilteringOrientation, ToolsPlayableCloudGameListV2FilteringStatus } from "../models/index";

export interface ToolsPlayableCloudGameListV2Filtering {
  ad_status?: ToolsPlayableCloudGameListV2FilteringAdStatus[];
  game_ids?: string[];
  ids?: (number | string)[];
  name?: string;
  orientation?: ToolsPlayableCloudGameListV2FilteringOrientation[];
  status?: ToolsPlayableCloudGameListV2FilteringStatus[];
}

