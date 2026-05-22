import type { UpdateLocalStoreStruct } from "../v3/index";
export interface LocalStoresUpdateRequest {
    account_id?: number | string;
    local_store_list?: UpdateLocalStoreStruct[];
}
