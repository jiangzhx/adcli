import type { TaskResultStatus, TaskScope, TaskStatus, TaskType } from "../model/index";
export interface BatchAsyncRequestsGetTaskListStruct {
    task_id?: number | string;
    task_name?: string;
    task_type?: TaskType;
    task_scope?: TaskScope;
    status?: TaskStatus;
    result_status?: TaskResultStatus;
    created_time?: number;
    end_time?: number;
    scope_object_id_list?: number[];
    scope_object_id_str_list?: string[];
}
