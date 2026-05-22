import type { FilterOperator } from "../v3/index";
export interface QueryConditionStruct {
    field?: string;
    operator?: FilterOperator;
    values?: string[];
}
