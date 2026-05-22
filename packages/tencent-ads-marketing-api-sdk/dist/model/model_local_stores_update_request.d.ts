import type { UpdateLocalStoreStruct } from "../model/index";
export interface LocalStoresUpdateRequest {
    account_id?: number | string;
    local_store_list?: UpdateLocalStoreStruct[];
}
