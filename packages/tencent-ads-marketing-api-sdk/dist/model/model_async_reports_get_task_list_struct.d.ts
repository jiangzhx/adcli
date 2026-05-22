import type { AsyncReportsGetResult, TaskStatus } from "../model/index";
export interface AsyncReportsGetTaskListStruct {
    task_id?: number | string;
    task_name?: string;
    status?: TaskStatus;
    created_time?: number;
    result?: AsyncReportsGetResult;
}
