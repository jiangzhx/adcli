import type { FilterOperator } from "../v3/index";
export interface TargetingFilteringStruct {
    field?: string;
    operator?: FilterOperator;
    values?: string[];
}
