import type { ProductSeriesSpecFilteringStruct, ProductSeriesSpecLogicOperator } from "../model/index";
export interface ProductSeriesSpec {
    logic_operator?: ProductSeriesSpecLogicOperator;
    filters?: ProductSeriesSpecFilteringStruct[];
}
