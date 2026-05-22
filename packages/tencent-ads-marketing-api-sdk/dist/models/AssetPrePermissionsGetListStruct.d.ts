import type { AssetType, GrantAllType, PathType } from "../models";
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
