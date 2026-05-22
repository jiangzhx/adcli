import type { GetAsyncTaskResult, TaskStatus } from "../v3/index";
export interface GetAsyncTaskListStruct {
    task_id?: number | string;
    task_name?: string;
    task_type?: string;
    status?: TaskStatus;
    created_time?: number;
    result?: GetAsyncTaskResult;
}
