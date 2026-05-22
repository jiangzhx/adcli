// Generated from oceanengine/ad_open_sdk_go models/model_tools_event_all_assets_detail_v2_response_data_asset_list_inner.go
// Do not edit manually.

import type { ToolsEventAllAssetsDetailV2DataAssetListAppType, ToolsEventAllAssetsDetailV2DataAssetListAssetType } from "../models/index";

export interface ToolsEventAllAssetsDetailV2ResponseDataAssetListInner {
  app_id?: number | string;
  app_name?: string;
  app_type?: ToolsEventAllAssetsDetailV2DataAssetListAppType;
  asset_id?: number | string;
  asset_name?: string;
  asset_type?: ToolsEventAllAssetsDetailV2DataAssetListAssetType;
  download_url?: string;
  micro_app_id?: string;
  micro_app_instance_id?: number | string;
  package_id?: string;
  package_name?: string;
  quick_app_id?: number | string;
  quick_app_package_name?: string;
  site_id?: number | string;
}

