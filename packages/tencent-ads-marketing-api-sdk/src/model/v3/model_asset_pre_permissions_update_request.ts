// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_asset_pre_permissions_update_request.go
// Do not edit manually.

import type { AssetType, PathType } from "../v3/index";

export interface AssetPrePermissionsUpdateRequest {
  account_id?: number | string;
  asset_id?: number | string;
  asset_type?: AssetType;
  path_id?: number | string;
  path_type?: PathType;
}

