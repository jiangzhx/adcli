import type { ProductItemSpec } from "../model/index";
export interface ProductItemsAddRequest {
    account_id?: number | string;
    product_catalog_id?: number | string;
    feed_id?: number | string;
    request_source?: string;
    product_item_spec_list?: ProductItemSpec[];
}
