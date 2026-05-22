import type { Conf, TrackingReportListStruct } from "../models";
export interface TrackingReportsGetResponseData {
    list?: TrackingReportListStruct[];
    page_info?: Conf;
}
