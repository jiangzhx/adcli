import type { CreateLocalStoreStruct } from "../v3/index";
export interface LocalStoresAddRequest {
    account_id?: number | string;
    local_store_list?: CreateLocalStoreStruct[];
}
