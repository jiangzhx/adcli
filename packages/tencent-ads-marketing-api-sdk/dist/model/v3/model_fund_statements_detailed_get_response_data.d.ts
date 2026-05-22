import type { Conf, FundStatementsDetailedGetListStruct } from "../v3/index";
export interface FundStatementsDetailedGetResponseData {
    list?: FundStatementsDetailedGetListStruct[];
    page_info?: Conf;
}
