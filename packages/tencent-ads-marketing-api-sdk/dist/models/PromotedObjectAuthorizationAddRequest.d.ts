import type { AuthSpec, PromotedObjectType } from "../models";
export interface PromotedObjectAuthorizationAddRequest {
    account_id?: number | string;
    promoted_object_type?: PromotedObjectType;
    promoted_object_name?: string;
    auth_spec?: AuthSpec;
    auth_begin_date?: number;
    auth_ttl?: number;
}
