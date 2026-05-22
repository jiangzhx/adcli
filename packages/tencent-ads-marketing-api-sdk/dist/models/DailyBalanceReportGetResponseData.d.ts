import type { Conf, DailyBalanceReportGetListStruct } from "../models";
export interface DailyBalanceReportGetResponseData {
    list?: DailyBalanceReportGetListStruct[];
    page_info?: Conf;
}
