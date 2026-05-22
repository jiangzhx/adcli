import type { CreateLocalStoreStruct } from "../models";
export interface LocalStoresAddRequest {
    account_id?: number | string;
    local_store_list?: CreateLocalStoreStruct[];
}
