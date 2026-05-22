import type { ProductSeriesSpec, ProductSeriesType } from "../model/index";
export interface ProductSeriesStruct {
    product_series_id?: number | string;
    product_series_name?: string;
    product_series_description?: string;
    product_series_type?: ProductSeriesType;
    product_series?: ProductSeriesSpec;
}
