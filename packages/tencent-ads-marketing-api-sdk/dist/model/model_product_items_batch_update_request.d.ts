import type { ProductUpdateItem } from "../model/index";
export interface ProductItemsBatchUpdateRequest {
    account_id?: number | string;
    catalog_id?: number | string;
    product_update_list?: ProductUpdateItem[];
}
