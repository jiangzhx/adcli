import type { DateTimeRange } from "../model/index";
export interface RptFilter {
    time_range?: DateTimeRange;
    report_only?: number;
    time_dimension?: number;
    time_line?: number;
}
