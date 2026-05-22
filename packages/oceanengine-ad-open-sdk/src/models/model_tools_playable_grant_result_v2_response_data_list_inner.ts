// Generated from oceanengine/ad_open_sdk_go models/model_tools_playable_grant_result_v2_response_data_list_inner.go
// Do not edit manually.

import type { ToolsPlayableGrantResultV2DataListStatus } from "../models/index";

export interface ToolsPlayableGrantResultV2ResponseDataListInner {
  create_time?: string;
  granted_id?: number | string;
  new_playable_id?: number | string;
  new_playable_url?: string;
  playable_id?: number | string;
  playable_url?: string;
  status?: ToolsPlayableGrantResultV2DataListStatus;
  task_id?: number | string;
}

