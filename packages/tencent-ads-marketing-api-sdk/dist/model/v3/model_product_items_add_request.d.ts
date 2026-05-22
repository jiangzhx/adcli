import type { ProductItemSpec, UsageInfo } from "../v3/index";
export interface ProductItemsAddRequest {
    account_id?: number | string;
    product_catalog_id?: number | string;
    feed_id?: number | string;
    request_source?: string;
    usage_info?: UsageInfo;
    product_item_spec_list?: ProductItemSpec[];
}
