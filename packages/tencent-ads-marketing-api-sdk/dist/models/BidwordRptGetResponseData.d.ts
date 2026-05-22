import type { BidwordRptGetListStruct, Conf, ReportStructV3, Total } from "../models";
export interface BidwordRptGetResponseData {
    conf?: Conf;
    list?: BidwordRptGetListStruct[];
    total?: Total;
    reportv3_list?: ReportStructV3[];
}
