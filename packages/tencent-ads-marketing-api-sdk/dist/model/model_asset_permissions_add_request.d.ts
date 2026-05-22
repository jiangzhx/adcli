import type { AssetAccountType, AssetPermissionSpecStruct, AssetType } from "../model/index";
export interface AssetPermissionsAddRequest {
    account_id?: number | string;
    asset_type?: AssetType;
    asset_permission_spec?: AssetPermissionSpecStruct[];
    licensing_account_id_list?: number[];
    licensing_id_type?: AssetAccountType;
    path_id?: number | string;
    permission_list?: string[];
}
