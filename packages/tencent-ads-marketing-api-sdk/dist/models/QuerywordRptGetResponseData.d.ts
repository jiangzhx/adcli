import type { Conf, QuerywordRptGetListStruct, ReportStructV3, Total } from "../models";
export interface QuerywordRptGetResponseData {
    conf?: Conf;
    list?: QuerywordRptGetListStruct[];
    total?: Total;
    reportv3_list?: ReportStructV3[];
}
