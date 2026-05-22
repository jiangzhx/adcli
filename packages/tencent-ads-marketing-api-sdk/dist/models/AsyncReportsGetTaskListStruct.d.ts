import type { AsyncReportsGetResult, TaskStatus } from "../models";
export interface AsyncReportsGetTaskListStruct {
    task_id?: number | string;
    task_name?: string;
    status?: TaskStatus;
    created_time?: number;
    result?: AsyncReportsGetResult;
}
