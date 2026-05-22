import type { FilterOperator } from "../v3/index";
export interface ComponentDetailFilteringStruct {
    field?: string;
    operator?: FilterOperator;
    values?: string[];
}
