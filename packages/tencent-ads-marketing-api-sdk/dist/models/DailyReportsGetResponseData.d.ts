import type { PageInfo, ReportStruct } from "../models";
export interface DailyReportsGetResponseData {
    list?: ReportStruct[];
    page_info?: PageInfo;
}
