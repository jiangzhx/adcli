import type { ApiTaskSpec } from "../v3/index";
export interface AsyncTasksAddRequest {
    account_id?: number | string;
    task_name?: string;
    task_type?: string;
    task_spec?: ApiTaskSpec;
}
