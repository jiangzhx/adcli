import type { FilterOperator } from "../models";
export interface AsyncTaskFilteringStruct {
    field?: string;
    operator?: FilterOperator;
    values?: string[];
}
