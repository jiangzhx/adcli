import type { LocalStoreListStruct } from "../v3/index";
export interface LocalStorePackagesAddRequest {
    account_id?: number | string;
    local_store_package_name?: string;
    local_store_list?: LocalStoreListStruct[];
}
