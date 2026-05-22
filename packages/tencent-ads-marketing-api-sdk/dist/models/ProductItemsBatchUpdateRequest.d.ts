import type { ProductUpdateItem } from "../models";
export interface ProductItemsBatchUpdateRequest {
    account_id?: number | string;
    catalog_id?: number | string;
    product_update_list?: ProductUpdateItem[];
}
