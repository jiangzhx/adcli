import type { HourlyReportApiListStruct, PageInfo } from "../v3/index";
export interface HourlyReportsGetResponseData {
    list?: HourlyReportApiListStruct[];
    page_info?: PageInfo;
}
