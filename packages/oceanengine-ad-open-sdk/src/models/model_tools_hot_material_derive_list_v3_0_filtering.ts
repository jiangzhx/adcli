// Generated from oceanengine/ad_open_sdk_go models/model_tools_hot_material_derive_list_v3_0_filtering.go
// Do not edit manually.

import type { ToolsHotMaterialDeriveListV30FilteringStatuses } from "../models/index";

export interface ToolsHotMaterialDeriveListV30Filtering {
  end_time?: string;
  origin_material_ids?: (number | string)[];
  start_time?: string;
  statuses?: ToolsHotMaterialDeriveListV30FilteringStatuses[];
  task_ids?: (number | string)[];
}

