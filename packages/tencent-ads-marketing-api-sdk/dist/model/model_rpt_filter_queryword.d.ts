import type { QuerywordRange, TimeLine } from "../model/index";
export interface RptFilterQueryword {
    time_range?: QuerywordRange;
    time_dimension?: number;
    time_line?: TimeLine;
}
