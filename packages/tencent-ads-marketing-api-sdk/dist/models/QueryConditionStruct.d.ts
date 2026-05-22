import type { FilterOperator } from "../models";
export interface QueryConditionStruct {
    field?: string;
    operator?: FilterOperator;
    values?: string[];
}
