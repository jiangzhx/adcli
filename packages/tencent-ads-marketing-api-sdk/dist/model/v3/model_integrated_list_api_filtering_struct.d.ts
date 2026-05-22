import type { FilterOperator } from "../v3/index";
export interface IntegratedListApiFilteringStruct {
    field?: string;
    operator?: FilterOperator;
    values?: string[];
}
