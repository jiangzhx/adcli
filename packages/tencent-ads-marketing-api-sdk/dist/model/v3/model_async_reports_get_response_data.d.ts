import type { PageInfo, TaskListStruct } from "../v3/index";
export interface AsyncReportsGetResponseData {
    list?: TaskListStruct[];
    page_info?: PageInfo;
}
