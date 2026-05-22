import type { PromotedObjectType } from "../model/index";
export interface WildcardsGetRequest {
    account_id?: number | string;
    product_catalog_id?: number | string;
    promoted_object_type?: PromotedObjectType;
}
