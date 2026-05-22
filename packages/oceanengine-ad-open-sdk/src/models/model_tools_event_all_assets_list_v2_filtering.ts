// Generated from oceanengine/ad_open_sdk_go models/model_tools_event_all_assets_list_v2_filtering.go
// Do not edit manually.

import type { ToolsEventAllAssetsListV2FilteringAssetType } from "../models/index";

export interface ToolsEventAllAssetsListV2Filtering {
  asset_ids?: (number | string)[];
  asset_type?: ToolsEventAllAssetsListV2FilteringAssetType;
  modify_end_time?: string;
  modify_start_time?: string;
}

