// Generated from oceanengine/ad_open_sdk_go models/model_tools_event_all_assets_list_v2_response_data_asset_list_inner.go
// Do not edit manually.

import type { ToolsEventAllAssetsListV2DataAssetListAssetType, ToolsEventAllAssetsListV2DataAssetListShareType } from "../models/index";

export interface ToolsEventAllAssetsListV2ResponseDataAssetListInner {
  app_force_info?: string;
  asset_id?: number | string;
  asset_name?: string;
  asset_type?: ToolsEventAllAssetsListV2DataAssetListAssetType;
  create_time?: string;
  modify_time?: string;
  share_type?: ToolsEventAllAssetsListV2DataAssetListShareType;
}

