import type { ProductSeriesSpecFilteringValueStruct } from "../model/index";
export interface ProductSeriesSpecFilteringStruct {
    field?: string;
    operator?: string;
    values?: ProductSeriesSpecFilteringValueStruct[];
}
