// Generated from tencentad/marketing-api-go-sdk pkg/model/model_asset_pre_permissions_update_request.go
// Do not edit manually.

import type { AssetType, PathType } from "../model/index";

export interface AssetPrePermissionsUpdateRequest {
  account_id?: number | string;
  asset_id?: number | string;
  asset_type?: AssetType;
  path_id?: number | string;
  path_type?: PathType;
}

