import type { QuerywordRange, TimeLine } from "../models";
export interface RptFilterQueryword {
    time_range?: QuerywordRange;
    time_dimension?: number;
    time_line?: TimeLine;
}
