import type { Conf, ReportLandingPageListStruct } from "../model/index";
export interface ReportLandingPageResponseData {
    task_id?: number | string;
    list?: ReportLandingPageListStruct[];
    page_info?: Conf;
}
