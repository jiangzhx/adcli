import type { AsyncReportsGetTaskListStruct, Conf } from "../model/index";
export interface AsyncReportsGetResponseData {
    list?: AsyncReportsGetTaskListStruct[];
    page_info?: Conf;
}
