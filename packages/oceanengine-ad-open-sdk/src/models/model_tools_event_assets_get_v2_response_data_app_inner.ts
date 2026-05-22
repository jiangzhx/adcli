// Generated from oceanengine/ad_open_sdk_go models/model_tools_event_assets_get_v2_response_data_app_inner.go
// Do not edit manually.

import type { ToolsEventAssetsGetV2DataAppAppType, ToolsEventAssetsGetV2DataAppRole } from "../models/index";

export interface ToolsEventAssetsGetV2ResponseDataAppInner {
  app_id?: number | string;
  app_name?: string;
  app_type?: ToolsEventAssetsGetV2DataAppAppType;
  asset_id?: number | string;
  asset_name?: string;
  download_url?: string;
  package_id?: string;
  package_name?: string;
  role?: ToolsEventAssetsGetV2DataAppRole;
}

