import type { FilterOperator } from "../v3/index";
export interface DailyReportsFilteringStruct {
    field?: string;
    operator?: FilterOperator;
    values?: string[];
}
