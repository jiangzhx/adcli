import type { Conf, ReportAdUnionListStruct } from "../models";
export interface ReportAdUnionResponseData {
    task_id?: number | string;
    list?: ReportAdUnionListStruct[];
    page_info?: Conf;
}
