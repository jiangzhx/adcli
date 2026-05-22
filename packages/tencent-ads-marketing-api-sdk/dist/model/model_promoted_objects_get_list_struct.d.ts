import type { ProductPromotedObjectTypeSelect, PromotedObjectSpecRead } from "../model/index";
export interface PromotedObjectsGetListStruct {
    promoted_object_name?: string;
    promoted_object_id?: string;
    promoted_object_type?: ProductPromotedObjectTypeSelect;
    promoted_object_spec?: PromotedObjectSpecRead;
    created_time?: number;
    last_modified_time?: number;
}
