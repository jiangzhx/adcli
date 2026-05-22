import type { BusinessUnitListGetListStruct, PageInfo } from "../v3/index";
export interface BusinessUnitListGetResponseData {
    list?: BusinessUnitListGetListStruct[];
    page_info?: PageInfo;
}
