import type { FilterOperator } from "../v3/index";
export interface GetAsyncReportsFilteringStruct {
    field?: string;
    operator?: FilterOperator;
    values?: string[];
}
