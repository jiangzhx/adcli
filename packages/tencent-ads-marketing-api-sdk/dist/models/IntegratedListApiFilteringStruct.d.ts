import type { FilterOperator } from "../models";
export interface IntegratedListApiFilteringStruct {
    field?: string;
    operator?: FilterOperator;
    values?: string[];
}
