import type { Conf, ProductSeriesStruct } from "../model/index";
export interface ProductSeriesGetResponseData {
    list?: ProductSeriesStruct[];
    page_info?: Conf;
}
