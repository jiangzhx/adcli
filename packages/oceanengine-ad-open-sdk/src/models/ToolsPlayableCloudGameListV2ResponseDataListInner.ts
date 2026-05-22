// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsPlayableCloudGameListV2DataListAdStatus, ToolsPlayableCloudGameListV2DataListOrientation, ToolsPlayableCloudGameListV2DataListStatus } from "../models";

export interface ToolsPlayableCloudGameListV2ResponseDataListInner {
  ad_status?: ToolsPlayableCloudGameListV2DataListAdStatus;
  advertiser_id?: number;
  create_time?: string;
  effective_time_end?: string;
  effective_time_start?: string;
  game_id?: string;
  id?: number;
  modify_time?: string;
  name?: string;
  orientation?: ToolsPlayableCloudGameListV2DataListOrientation;
  preview_url?: string;
  status?: ToolsPlayableCloudGameListV2DataListStatus;
  trial_time?: number;
}

