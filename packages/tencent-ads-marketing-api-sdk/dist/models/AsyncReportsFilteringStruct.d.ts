import type { FilterOperator } from "../models";
export interface AsyncReportsFilteringStruct {
    field?: string;
    operator?: FilterOperator;
    values?: string[];
}
