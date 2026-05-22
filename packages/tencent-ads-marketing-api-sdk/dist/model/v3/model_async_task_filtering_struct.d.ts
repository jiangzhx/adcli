import type { FilterOperator } from "../v3/index";
export interface AsyncTaskFilteringStruct {
    field?: string;
    operator?: FilterOperator;
    values?: string[];
}
