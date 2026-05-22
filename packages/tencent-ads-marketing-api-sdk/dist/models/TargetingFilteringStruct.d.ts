import type { FilterOperator } from "../models";
export interface TargetingFilteringStruct {
    field?: string;
    operator?: FilterOperator;
    values?: string[];
}
