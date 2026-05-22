import type { DateTimeRange } from "../models";
export interface RptFilter {
    time_range?: DateTimeRange;
    report_only?: number;
    time_dimension?: number;
    time_line?: number;
}
