import type { CreateLocalStoreStruct } from "../model/index";
export interface LocalStoresAddRequest {
    account_id?: number | string;
    poi_list?: string[];
    local_store_list?: CreateLocalStoreStruct[];
}
