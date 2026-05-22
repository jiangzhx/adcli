import type { BatchAsyncRequestTaskSpec, TaskType } from "../model/index";
export interface BatchAsyncRequestsAddRequest {
    account_id?: number | string;
    task_name?: string;
    task_type?: TaskType;
    task_spec?: BatchAsyncRequestTaskSpec;
}
