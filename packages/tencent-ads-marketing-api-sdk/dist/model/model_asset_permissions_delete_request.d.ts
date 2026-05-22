import type { AssetAccountType, AssetPermissionGrantType, AssetType } from "../model/index";
export interface AssetPermissionsDeleteRequest {
    account_id?: number | string;
    licensing_account_id?: number | string;
    asset_type?: AssetType;
    asset_permission_grant_type?: AssetPermissionGrantType;
    asset_id?: number | string;
    licensing_id_type?: AssetAccountType;
    path_id?: number | string;
}
