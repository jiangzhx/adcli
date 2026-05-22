import type { ProductSeriesSpecFilteringValueStruct, ProductSetSpecFieldValueOperator } from "../models";
export interface ProductSeriesSpecFilteringStruct {
    field?: string;
    operator?: ProductSetSpecFieldValueOperator;
    values?: ProductSeriesSpecFilteringValueStruct[];
}
