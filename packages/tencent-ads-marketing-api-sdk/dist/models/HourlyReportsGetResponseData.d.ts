import type { HourlyReportApiListStruct, PageInfo } from "../models";
export interface HourlyReportsGetResponseData {
    list?: HourlyReportApiListStruct[];
    page_info?: PageInfo;
}
