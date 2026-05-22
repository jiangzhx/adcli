import type { UpdateLocalStoreStruct } from "../models";
export interface LocalStoresUpdateRequest {
    account_id?: number | string;
    local_store_list?: UpdateLocalStoreStruct[];
}
