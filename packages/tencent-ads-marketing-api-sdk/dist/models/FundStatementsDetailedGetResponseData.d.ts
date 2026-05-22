import type { Conf, FundStatementsDetailedGetListStruct } from "../models";
export interface FundStatementsDetailedGetResponseData {
    list?: FundStatementsDetailedGetListStruct[];
    page_info?: Conf;
}
