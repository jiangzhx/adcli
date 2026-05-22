// Generated from oceanengine/ad_open_sdk_go models/model_tools_playable_cloud_game_list_v2_response_data_list_inner.go
// Do not edit manually.

import type { ToolsPlayableCloudGameListV2DataListAdStatus, ToolsPlayableCloudGameListV2DataListOrientation, ToolsPlayableCloudGameListV2DataListStatus } from "../models/index";

export interface ToolsPlayableCloudGameListV2ResponseDataListInner {
  ad_status?: ToolsPlayableCloudGameListV2DataListAdStatus;
  advertiser_id?: number | string;
  create_time?: string;
  effective_time_end?: string;
  effective_time_start?: string;
  game_id?: string;
  id?: number | string;
  modify_time?: string;
  name?: string;
  orientation?: ToolsPlayableCloudGameListV2DataListOrientation;
  preview_url?: string;
  status?: ToolsPlayableCloudGameListV2DataListStatus;
  trial_time?: number;
}

