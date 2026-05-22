import type { Conf, ReportAdUnionListStruct } from "../model/index";
export interface ReportAdUnionResponseData {
    task_id?: number | string;
    list?: ReportAdUnionListStruct[];
    page_info?: Conf;
}
