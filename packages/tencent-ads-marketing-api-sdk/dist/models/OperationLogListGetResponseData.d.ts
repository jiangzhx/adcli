import type { OplogArrStruct, PageInfo } from "../models";
export interface OperationLogListGetResponseData {
    list?: OplogArrStruct[];
    page_info?: PageInfo;
}
