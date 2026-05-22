import type { ProductUpdateItem } from "../v3/index";
export interface ProductItemsBatchUpdateRequest {
    account_id?: number | string;
    catalog_id?: number | string;
    product_update_list?: ProductUpdateItem[];
}
