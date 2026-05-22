import type { AssetType, PathType } from "../models";
export interface AssetPrePermissionsUpdateRequest {
    account_id?: number | string;
    asset_id?: number | string;
    asset_type?: AssetType;
    path_id?: number | string;
    path_type?: PathType;
}
