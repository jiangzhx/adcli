import type { ProductSeriesSpec } from "../models";
export interface ProductSeriesAddRequest {
    account_id?: number | string;
    catalog_id?: number | string;
    series_name?: string;
    definition?: ProductSeriesSpec;
}
