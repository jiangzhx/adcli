import type { PageInfo, ReportStruct } from "../v3/index";
export interface DailyReportsGetResponseData {
    list?: ReportStruct[];
    page_info?: PageInfo;
}
