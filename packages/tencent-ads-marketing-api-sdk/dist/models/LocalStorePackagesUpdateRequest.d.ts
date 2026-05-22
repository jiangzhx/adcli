import type { LocalStoreListStruct } from "../models";
export interface LocalStorePackagesUpdateRequest {
    account_id?: number | string;
    local_store_package_id?: number | string;
    local_store_package_name?: string;
    local_store_list?: LocalStoreListStruct[];
}
