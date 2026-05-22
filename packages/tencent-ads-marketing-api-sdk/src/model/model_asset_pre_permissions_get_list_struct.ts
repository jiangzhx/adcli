// Generated from tencentad/marketing-api-go-sdk pkg/model/model_asset_pre_permissions_get_list_struct.go
// Do not edit manually.

import type { AssetType, GrantAllType, PathType } from "../model/index";

export interface AssetPrePermissionsGetListStruct {
  account_id?: number | string;
  owner_account_id?: number | string;
  asset_id?: number | string;
  asset_name?: string;
  asset_type?: AssetType;
  path_id?: number | string;
  path_type?: PathType;
  is_granted_all?: GrantAllType;
  grant_time?: number;
  permission_list?: string[];
}

