import type { Conf, GetAsyncTaskListStruct } from "../v3/index";
export interface AsyncTasksGetResponseData {
    list?: GetAsyncTaskListStruct[];
    page_info?: Conf;
}
