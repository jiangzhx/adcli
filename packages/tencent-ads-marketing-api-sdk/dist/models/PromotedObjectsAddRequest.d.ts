import type { PromotedObjectType } from "../models";
export interface PromotedObjectsAddRequest {
    promoted_object_type?: PromotedObjectType;
    promoted_object_id?: string;
    account_id?: number | string;
}
