import type { AsyncTasksGetData } from "../model/index";
export interface AsyncTasksGetResult {
    code?: number;
    message?: string;
    data?: AsyncTasksGetData;
}
