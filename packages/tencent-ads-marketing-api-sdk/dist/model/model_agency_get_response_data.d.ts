import type { AgencyGetListStruct, PageInfo } from "../model/index";
export interface AgencyGetResponseData {
    list?: AgencyGetListStruct[];
    page_info?: PageInfo;
}
