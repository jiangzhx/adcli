import type { FilterOperator } from "../models";
export interface BatchAsyncTaskFilteringStruct {
    field?: string;
    operator?: FilterOperator;
    values?: string[];
}
