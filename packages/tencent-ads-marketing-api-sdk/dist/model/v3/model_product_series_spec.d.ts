import type { ProductSeriesSpecFilteringStruct, ProductSeriesSpecLogicOperator } from "../v3/index";
export interface ProductSeriesSpec {
    logic_operator?: ProductSeriesSpecLogicOperator;
    filters?: ProductSeriesSpecFilteringStruct[];
}
