import type { Conf, DailyBalanceReportGetListStruct } from "../v3/index";
export interface DailyBalanceReportGetResponseData {
    list?: DailyBalanceReportGetListStruct[];
    page_info?: Conf;
}
