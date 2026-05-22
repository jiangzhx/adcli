import type { CreativeComponentSpecStruct, CreativeComponentType, PromotedObjectType } from "../models";
export interface CreativeComponentsAddRequest {
    account_id?: number | string;
    component_name?: string;
    component_type?: CreativeComponentType;
    promoted_object_type?: PromotedObjectType;
    promoted_object_id?: string;
    component_spec?: CreativeComponentSpecStruct;
}
