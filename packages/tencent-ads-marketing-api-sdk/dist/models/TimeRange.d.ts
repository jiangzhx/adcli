import type { TimeType } from "../models";
export interface TimeRange {
    start_time?: number;
    end_time?: number;
    time_type?: TimeType;
}
