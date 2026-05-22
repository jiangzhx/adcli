import type { FilterOperator } from "../models";
export interface DailyReportsFilteringStruct {
    field?: string;
    operator?: FilterOperator;
    values?: string[];
}
