import type { Conf, ProductCatalogsGetListStruct } from "../models";
export interface ProductCatalogsGetResponseData {
    list?: ProductCatalogsGetListStruct[];
    page_info?: Conf;
}
