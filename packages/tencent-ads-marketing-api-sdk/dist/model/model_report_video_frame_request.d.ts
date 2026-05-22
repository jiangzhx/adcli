import type { DateRange, FilteringStruct } from "../model/index";
export interface ReportVideoFrameRequest {
    filtering?: FilteringStruct[];
    date_range?: DateRange;
    group_by?: string[];
    account_id?: number | string;
}
