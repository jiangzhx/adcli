import type { TaskResultStatus, TaskScope, TaskStatus } from "../models";
export interface Summary {
    task_id?: number | string;
    task_name?: string;
    task_type?: string;
    task_scope?: TaskScope;
    status?: TaskStatus;
    result_status?: TaskResultStatus;
    created_time?: number;
    end_time?: number;
    success_count?: number;
    fail_count?: number;
    system_error_count?: number;
    progress?: number;
}
