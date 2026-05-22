import type { TaskSpec } from "../v3/index";
export interface BatchAsyncRequestsAddRequest {
    account_id?: number | string;
    task_name?: string;
    task_type?: string;
    task_spec?: TaskSpec;
}
