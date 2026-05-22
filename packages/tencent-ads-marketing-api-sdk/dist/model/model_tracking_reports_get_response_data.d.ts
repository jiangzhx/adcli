import type { Conf, TrackingReportListStruct } from "../model/index";
export interface TrackingReportsGetResponseData {
    list?: TrackingReportListStruct[];
    page_info?: Conf;
}
