import type { FilterOperator } from "../v3/index";
export interface GetMetadataFilteringStruct {
    field?: string;
    operator?: FilterOperator;
    values?: string[];
}
