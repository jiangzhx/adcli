import type { Conf, DailyReportsGetListStruct } from "../model/index";
export interface DailyReportsGetResponseData {
    list?: DailyReportsGetListStruct[];
    page_info?: Conf;
}
