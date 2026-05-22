import type { FilterOperator } from "../v3/index";
export interface AsyncReportsFilteringStruct {
    field?: string;
    operator?: FilterOperator;
    values?: string[];
}
