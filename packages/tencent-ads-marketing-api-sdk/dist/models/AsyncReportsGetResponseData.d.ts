import type { PageInfo, TaskListStruct } from "../models";
export interface AsyncReportsGetResponseData {
    list?: TaskListStruct[];
    page_info?: PageInfo;
}
