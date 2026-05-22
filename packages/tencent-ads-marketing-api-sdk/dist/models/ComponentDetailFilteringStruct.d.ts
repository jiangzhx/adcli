import type { FilterOperator } from "../models";
export interface ComponentDetailFilteringStruct {
    field?: string;
    operator?: FilterOperator;
    values?: string[];
}
