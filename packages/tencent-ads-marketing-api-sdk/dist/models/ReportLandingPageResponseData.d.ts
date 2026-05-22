import type { Conf, ReportLandingPageListStruct } from "../models";
export interface ReportLandingPageResponseData {
    task_id?: number | string;
    list?: ReportLandingPageListStruct[];
    page_info?: Conf;
}
