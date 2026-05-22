import type { TaskDetailResultType } from "../model/index";
export interface DetailListStruct {
    scope_object_id?: number | string;
    scope_object_id_str?: string;
    scope_object_name?: string;
    detail_result_type?: TaskDetailResultType;
    message?: string;
}
