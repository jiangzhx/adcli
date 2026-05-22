import type { BusinessUnitListGetListStruct, PageInfo } from "../models";
export interface BusinessUnitListGetResponseData {
    list?: BusinessUnitListGetListStruct[];
    page_info?: PageInfo;
}
