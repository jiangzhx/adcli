import type { FilterOperator } from "../models";
export interface MaterialAsyncTaskFilteringStruct {
    field?: string;
    operator?: FilterOperator;
    values?: string[];
}
