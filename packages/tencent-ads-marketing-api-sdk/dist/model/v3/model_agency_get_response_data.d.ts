import type { AgencyGetListStruct, PageInfo } from "../v3/index";
export interface AgencyGetResponseData {
    list?: AgencyGetListStruct[];
    page_info?: PageInfo;
}
