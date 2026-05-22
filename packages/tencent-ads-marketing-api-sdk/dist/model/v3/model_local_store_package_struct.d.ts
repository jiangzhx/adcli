import type { LocalStoreListStruct, SysStatus } from "../v3/index";
export interface LocalStorePackageStruct {
    local_store_package_id?: number | string;
    local_store_package_name?: string;
    owner_account_id?: number | string;
    local_store_list?: LocalStoreListStruct[];
    system_status?: SysStatus;
    created_time?: number;
    last_modified_time?: number;
}
