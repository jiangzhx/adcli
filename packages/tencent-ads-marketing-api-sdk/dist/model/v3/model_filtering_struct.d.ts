import type { FilterOperator } from "../v3/index";
export interface FilteringStruct {
    field?: string;
    operator?: FilterOperator;
    values?: string[];
}
