import type { Conf, ProductSeriesStruct } from "../v3/index";
export interface ProductSeriesGetResponseData {
    list?: ProductSeriesStruct[];
    page_info?: Conf;
}
