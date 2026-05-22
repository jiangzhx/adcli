import type { PromotedObjectType } from "../models";
export interface PromotedObjectsDeleteRequest {
    account_id?: number | string;
    promoted_object_type?: PromotedObjectType;
    promoted_object_id?: string;
}
