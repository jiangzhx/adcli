import type { Conf, DailyBalanceReportGetListStruct } from "../model/index";
export interface DailyBalanceReportGetResponseData {
    list?: DailyBalanceReportGetListStruct[];
    page_info?: Conf;
}
