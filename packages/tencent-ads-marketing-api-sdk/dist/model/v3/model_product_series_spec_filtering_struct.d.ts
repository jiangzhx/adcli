import type { ProductSeriesSpecFilteringValueStruct, ProductSetSpecFieldValueOperator } from "../v3/index";
export interface ProductSeriesSpecFilteringStruct {
    field?: string;
    operator?: ProductSetSpecFieldValueOperator;
    values?: ProductSeriesSpecFilteringValueStruct[];
}
