import type { OplogArrStruct, PageInfo } from "../v3/index";
export interface OperationLogListGetResponseData {
    list?: OplogArrStruct[];
    page_info?: PageInfo;
}
