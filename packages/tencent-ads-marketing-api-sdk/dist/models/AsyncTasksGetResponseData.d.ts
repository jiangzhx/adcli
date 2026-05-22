import type { Conf, GetAsyncTaskListStruct } from "../models";
export interface AsyncTasksGetResponseData {
    list?: GetAsyncTaskListStruct[];
    page_info?: Conf;
}
