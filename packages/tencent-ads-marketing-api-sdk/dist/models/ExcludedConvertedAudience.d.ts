import type { ExcludedDay, ExcludedDimension } from "../models";
export interface ExcludedConvertedAudience {
    excluded_dimension?: ExcludedDimension;
    conversion_behavior_list?: string[];
    excluded_day?: ExcludedDay;
}
