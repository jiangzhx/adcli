// Generated from tencentad/marketing-api-go-sdk pkg/model/model_asset_permissions_scenes_update_request.go
// Do not edit manually.

import type { DnAssetType, PathType } from "../model/index";

export interface AssetPermissionsScenesUpdateRequest {
  account_id?: number | string;
  asset_type?: DnAssetType;
  asset_id?: number | string;
  licensing_account_id?: number | string;
  path_type?: PathType;
  permission_list?: string[];
}

