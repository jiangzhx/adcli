// 由 oceanengine/ad_open_sdk_go models/model_tools_playable_list_get_v2_response_data_list_inner.go 生成
// 不要手动编辑。

import type { ToolsPlayableListGetV2DataListPlayableOrientation, ToolsPlayableListGetV2DataListStatus } from "../models/index";

export interface ToolsPlayableListGetV2ResponseDataListInner {
  advertiser_id?: number | string;
  playable_id?: number | string;
  playable_name?: string;
  playable_orientation?: ToolsPlayableListGetV2DataListPlayableOrientation;
  playable_url?: string;
  status?: ToolsPlayableListGetV2DataListStatus;
}

