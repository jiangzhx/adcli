import type { Conf, HourlyReportsGetListStruct } from "../model/index";
export interface HourlyReportsGetResponseData {
    list?: HourlyReportsGetListStruct[];
    page_info?: Conf;
}
