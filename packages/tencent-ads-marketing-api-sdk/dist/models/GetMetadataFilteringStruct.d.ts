import type { FilterOperator } from "../models";
export interface GetMetadataFilteringStruct {
    field?: string;
    operator?: FilterOperator;
    values?: string[];
}
