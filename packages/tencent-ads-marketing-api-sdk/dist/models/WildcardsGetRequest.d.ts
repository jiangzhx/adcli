import type { PromotedObjectType } from "../models";
export interface WildcardsGetRequest {
    account_id?: number | string;
    product_catalog_id?: number | string;
    promoted_object_type?: PromotedObjectType;
}
