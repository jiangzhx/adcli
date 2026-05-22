import type { AgencyGetListStruct, PageInfo } from "../models";
export interface AgencyGetResponseData {
    list?: AgencyGetListStruct[];
    page_info?: PageInfo;
}
