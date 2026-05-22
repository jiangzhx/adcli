import type { AsyncTasksGetResult, TaskStatus, TaskType } from "../model/index";
export interface AsyncTasksGetTaskListStruct {
    task_id?: number | string;
    task_name?: string;
    task_type?: TaskType;
    status?: TaskStatus;
    created_time?: number;
    result?: AsyncTasksGetResult;
}
