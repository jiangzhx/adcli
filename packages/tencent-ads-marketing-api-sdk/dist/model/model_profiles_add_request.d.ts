import type { ProfileType, PromotedObjectType } from "../model/index";
export interface ProfilesAddRequest {
    account_id?: number | string;
    promoted_object_type?: PromotedObjectType;
    promoted_object_id?: string;
    profile_type?: ProfileType;
    head_image_id?: string;
    profile_name?: string;
    description?: string;
    organization_id?: number | string;
    mdm_id?: number | string;
}
