import type { Conf, ProductSeriesStruct } from "../models";
export interface ProductSeriesGetResponseData {
    list?: ProductSeriesStruct[];
    page_info?: Conf;
}
