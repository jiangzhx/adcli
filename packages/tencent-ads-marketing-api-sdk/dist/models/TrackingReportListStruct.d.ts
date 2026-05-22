import type { SourceType } from "../models";
export interface TrackingReportListStruct {
    date?: string;
    hour?: number;
    raw_clicks?: number;
    "1min_clicks"?: number;
    "2min_clicks"?: number;
    "15min_clicks"?: number;
    request_fail?: number;
    response_fail?: number;
    http_status_error?: number;
    other_error?: number;
    source_type?: SourceType;
}
