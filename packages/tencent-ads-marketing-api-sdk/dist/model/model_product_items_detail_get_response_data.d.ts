import type { AuditStatus, ProductItemSpec } from "../model/index";
export interface ProductItemsDetailGetResponseData {
    feed_id?: number | string;
    system_status?: AuditStatus;
    reject_message?: string;
    product_item_spec?: ProductItemSpec;
}
