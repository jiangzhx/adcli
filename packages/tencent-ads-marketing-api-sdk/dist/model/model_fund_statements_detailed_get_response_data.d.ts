import type { Conf, FundStatementsDetailedGetListStruct } from "../model/index";
export interface FundStatementsDetailedGetResponseData {
    list?: FundStatementsDetailedGetListStruct[];
    page_info?: Conf;
}
