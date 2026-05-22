import type { PageInfo, SplitTestsGetListStruct } from "../model/index";
export interface SplitTestsGetResponseData {
    list?: SplitTestsGetListStruct[];
    page_info?: PageInfo;
}
