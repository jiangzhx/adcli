import type { AsyncTasksGetTaskListStruct, Conf } from "../model/index";
export interface AsyncTasksGetResponseData {
    list?: AsyncTasksGetTaskListStruct[];
    page_info?: Conf;
}
