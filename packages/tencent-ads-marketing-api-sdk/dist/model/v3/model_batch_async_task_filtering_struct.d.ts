import type { FilterOperator } from "../v3/index";
export interface BatchAsyncTaskFilteringStruct {
    field?: string;
    operator?: FilterOperator;
    values?: string[];
}
