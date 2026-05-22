import type { ProductSeriesSpecFilteringStruct, ProductSeriesSpecLogicOperator } from "../models";
export interface ProductSeriesSpec {
    logic_operator?: ProductSeriesSpecLogicOperator;
    filters?: ProductSeriesSpecFilteringStruct[];
}
