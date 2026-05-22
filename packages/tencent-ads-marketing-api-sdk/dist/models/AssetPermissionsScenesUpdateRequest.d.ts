import type { DnAssetType, PathType } from "../models";
export interface AssetPermissionsScenesUpdateRequest {
    account_id?: number | string;
    asset_type?: DnAssetType;
    asset_id?: number | string;
    licensing_account_id?: number | string;
    path_type?: PathType;
    permission_list?: string[];
}
