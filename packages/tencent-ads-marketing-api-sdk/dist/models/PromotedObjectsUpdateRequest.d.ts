import type { PromotedObjectType } from "../models";
export interface PromotedObjectsUpdateRequest {
    promoted_object_type?: PromotedObjectType;
    promoted_object_id?: string;
    account_id?: number | string;
}
