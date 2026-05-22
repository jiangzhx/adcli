import type { TaskSpec } from "../models";
export interface BatchAsyncRequestsAddRequest {
    account_id?: number | string;
    task_name?: string;
    task_type?: string;
    task_spec?: TaskSpec;
}
