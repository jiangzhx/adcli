import type { FilterOperator } from "../models";
export interface GetAsyncReportsFilteringStruct {
    field?: string;
    operator?: FilterOperator;
    values?: string[];
}
