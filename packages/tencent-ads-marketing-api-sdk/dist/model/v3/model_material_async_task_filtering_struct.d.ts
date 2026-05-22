import type { FilterOperator } from "../v3/index";
export interface MaterialAsyncTaskFilteringStruct {
    field?: string;
    operator?: FilterOperator;
    values?: string[];
}
